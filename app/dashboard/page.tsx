import AddPosts from "@/app/ui/components/AddPosts";
import AboutForm from "@/app/ui/components/AboutForm";
import { createPost } from "./server-actions";
import { prisma } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import PostsList from "../ui/components/PostLists";

export default async function DashboardPage() {
  const categories = await prisma.category.findMany();
  const about = await prisma.aboutPage.findUnique({ where: { id: 1 } });
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Server action to create about page
  async function createAboutPage(formData: FormData) {
    "use server";

    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();
    if (!title || !content) throw new Error("Title and content required");

    await prisma.aboutPage.upsert({
      where: { id: 1 },
      update: { title, content },
      create: { id: 1, title, content },
    });

    revalidatePath("/dashboard");
  }

  // Server action to delete a post
  async function deletePost(id: number) {
    "use server";

    await prisma.blogPost.delete({ where: { id } });
    revalidatePath("/dashboard");
  }

  return (
    <>
      <section>
        <div className="pt-38">
          <h1 className="text-center text-3xl md:text-5xl mb-10 font-serif tracking-wider">
            Dashboard
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-y-8">
          <AddPosts categories={categories} createPost={createPost} />
          <AboutForm
            initialTitle={about?.title || ""}
            initialContent={about?.content || ""}
            createAboutPage={createAboutPage}
          />
        </div>

        <div>
          <PostsList posts={posts} deletePost={deletePost} />
        </div>
      </section>
    </>
  );
}
