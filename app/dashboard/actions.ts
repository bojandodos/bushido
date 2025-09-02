"use server";

import { prisma } from "../lib/prisma";
import cloudinary from "../lib/cloudinary";
import { Readable } from "stream";
import type { UploadApiResponse } from "cloudinary";

// ----------------- Add Post Server Action -----------------
export async function createPost(formData: FormData) {
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();
  const categoryId = Number(formData.get("categoryId"));
  const file = formData.get("image") as File | null;

  if (!title || !content || !categoryId || !file) {
    throw new Error("All fields are required including an image.");
  }

  // Convert File to buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Upload to Cloudinary via stream
  const result: UploadApiResponse = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "blog" },
      (err, res) => {
        if (err) reject(err);
        else resolve(res!); // res is always defined if no error
      }
    );
    Readable.from([buffer]).pipe(uploadStream);
  });

  // Create post in Prisma
  const post = await prisma.blogPost.create({
    data: {
      title,
      content,
      categoryId,
      imageUrl: result.secure_url,
    },
  });

  return post;
}
