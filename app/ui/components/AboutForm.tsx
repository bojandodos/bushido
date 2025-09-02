"use client";

import { useState, useTransition } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type AboutFormProps = {
  initialTitle?: string;
  initialContent?: string;
  createAboutPage: (formData: FormData) => Promise<void>;
};

export default function AboutForm({
  initialTitle = "",
  initialContent = "",
  createAboutPage,
}: AboutFormProps) {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  const [format, setFormat] = useState({
    bold: false,
    italic: false,
    strike: false,
    bulletList: false,
    orderedList: false,
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {},
        orderedList: {},
        listItem: {},
      }),
    ],
    content: initialContent || "<p>Hello</p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "outline-none w-full min-h-[150px] p-2 bg-[#292929] rounded-md text-white",
      },
    },
    onUpdate: ({ editor }) => {
      setFormat({
        bold: editor.isActive("bold"),
        italic: editor.isActive("italic"),
        strike: editor.isActive("strike"),
        bulletList: editor.isActive("bulletList"),
        orderedList: editor.isActive("orderedList"),
      });
    },
    onSelectionUpdate: ({ editor }) => {
      setFormat({
        bold: editor.isActive("bold"),
        italic: editor.isActive("italic"),
        strike: editor.isActive("strike"),
        bulletList: editor.isActive("bulletList"),
        orderedList: editor.isActive("orderedList"),
      });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        startTransition(async () => {
          setSubmitted(false);

          const formData = new FormData();
          const target = e.target as HTMLFormElement;
          formData.append(
            "title",
            (target.elements.namedItem("title") as HTMLInputElement).value
          );
          formData.append("content", editor?.getHTML() || "");

          await createAboutPage(formData);
          setSubmitted(true);
        });
      }}
      className="flex flex-col gap-4 bg-neutral-900 p-10 rounded-md"
    >
      <h2 className="font-serif tracking-wider ml-4 text-2xl">About us</h2>

      <input
        type="text"
        name="title"
        defaultValue={initialTitle}
        required
        className="p-4 w-full bg-[#292929] rounded-md"
      />

      {/* Toolbar */}
      {editor && (
        <div className="flex gap-2 bg-[#1f1f1f] p-2 rounded-md">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-2 py-1 rounded ${format.bold ? "bg-gray-600" : ""}`}
          >
            B
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`px-2 py-1 rounded ${
              format.italic ? "bg-gray-600" : ""
            }`}
          >
            I
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`px-2 py-1 rounded ${
              format.strike ? "bg-gray-600" : ""
            }`}
          >
            S
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`px-2 py-1 rounded ${
              format.bulletList ? "bg-gray-600" : ""
            }`}
          >
            • List
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`px-2 py-1 rounded ${
              format.orderedList ? "bg-gray-600" : ""
            }`}
          >
            1. List
          </button>
        </div>
      )}

      {/* Editor */}
      {editor && (
        <EditorContent
          editor={editor}
          className="bg-[#292929] rounded-md p-2 text-white min-h-[150px] editor-content"
        />
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-4 rounded disabled:opacity-50"
        disabled={isPending}
      >
        {isPending ? "Saving..." : "Save"}
      </button>

      {submitted && !isPending && (
        <p className="text-green-500 font-semibold">Updated successfully!</p>
      )}
    </form>
  );
}
