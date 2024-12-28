"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// server actions
export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required.");
  }
  if (!content || content.trim().length === 0) {
    errors.push("Content is required.");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required.");
  }

  if (errors.length > 0) {
    return { errors }; // 최종적으로 얻을 actionState
  }

  let url;
  try {
    url = await uploadImage(image);
  } catch (error) {
    throw new Error(
      "Image upload failed, post wa not created. Please try again later."
    );
  }

  await storePost({
    imageUrl: url,
    title,
    content,
    userId: 1,
  });

  revalidatePath("/", "layout");
  redirect("/feed");
}

export async function togglePostLikeStatue(postId) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout"); // 캐싱 방지를 위해 재검증
}
