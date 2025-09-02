import { prisma } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  "use server";

  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();
  const categoryId = Number(formData.get("categoryId"));

  if (!title || !content || !categoryId) {
    throw new Error("Missing fields");
  }

  // Save to DB
  await prisma.blogPost.create({
    data: {
      title,
      content,
      categoryId,
    },
  });

  // Revalidate dashboard page
  revalidatePath("/dashboard");
}
