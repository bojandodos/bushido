"use client";

import { useState, useTransition } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type Category = {
  id: number;
  name: string;
};

type AddPostsProps = {
  categories: Category[];
  createPost: (formData: FormData) => Promise<void>; // Server action
};

export default function AddPosts({ categories, createPost }: AddPostsProps) {
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
    extensions: [StarterKit],
    content: "<p></p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "outline-none w-full min-h-[150px] p-2 bg-[#292929] rounded-md text-white editor-content",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      setSubmitted(false);

      try {
        const target = e.target as HTMLFormElement;
        const formData = new FormData();

        const title = (target.elements.namedItem("title") as HTMLInputElement)
          .value;
        if (!title) throw new Error("Title is required");

        formData.append("title", title);
        formData.append("content", editor?.getHTML() || "");

        const categoryId = (
          target.elements.namedItem("categoryId") as HTMLSelectElement
        ).value;
        if (!categoryId) throw new Error("Category is required");
        formData.append("categoryId", categoryId);

        const imageInput = target.elements.namedItem(
          "image"
        ) as HTMLInputElement;
        if (imageInput.files?.[0]) {
          formData.append("image", imageInput.files[0]);
        }

        await createPost(formData);

        // Reset the form and editor after submission
        target.reset();
        editor?.commands.clearContent();

        setSubmitted(true);
      } catch (err) {
        console.error("Failed to create post:", err);
        alert(err instanceof Error ? err.message : "Failed to create post");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-6 rounded-md bg-neutral-900 p-10"
    >
      <h2 className="font-serif tracking-wider ml-4 text-2xl">
        Create Article
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        className="p-4 w-full bg-[#292929] rounded-md"
      />

      {/* Tiptap Toolbar */}
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

      {/* Tiptap Editor */}
      {editor && (
        <EditorContent
          editor={editor}
          className="bg-[#292929] rounded-md p-2 editor-content"
        />
      )}

      <select
        name="categoryId"
        required
        className="p-4 w-full bg-[#292929] rounded-md"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <input
        type="file"
        name="image"
        accept="image/*"
        required
        className="bg-emerald-900 text-white px-6 py-4 rounded hover:cursor-pointer hover:bg-emerald-950 max-w-60"
      />

      <button
        type="submit"
        disabled={isPending}
        className={`bg-red-700 text-white px-6 py-4 rounded hover:cursor-pointer hover:bg-red-800 ${
          isPending ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isPending ? "Creating..." : "Create Post"}
      </button>

      {submitted && !isPending && (
        <p className="text-green-500 font-semibold">
          Post created successfully!
        </p>
      )}
    </form>
  );
}
