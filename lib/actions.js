"use server";
// NOTE: create 'Server Action' that guarantee to execute on the server, not on the client

export async function shareMeal(formData) {
  // FormData
  const meal = {
    title: formData.get("title"), // input.name=summary
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  console.log(meal);
}
