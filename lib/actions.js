"use server";
// NOTE: create 'Server Action' that guarantee to execute on the server, not on the client

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

// useActionState 에 의해 첫번째 인자로 이전 상태값을 전달받음
export async function shareMeal(prevState, formData) {
  // FormData
  const meal = {
    title: formData.get("title"), // input.name=summary
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // validations
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals"); // nextjs 가 해당 경로에 속하는 캐시를 유효성 재검사함
  redirect("/meals");
}
