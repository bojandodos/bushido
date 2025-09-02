import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/app/lib/cloudinary";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const dataUri = `data:${file.type};base64,${Buffer.from(
      arrayBuffer
    ).toString("base64")}`;

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "bushido-bites",
    });

    return NextResponse.json({ secure_url: result.secure_url });
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
};
