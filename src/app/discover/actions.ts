"use server";

import { z } from "zod";
import { generateMonasteryContent } from "@/ai/flows/generate-monastery-content";

const formSchema = z.object({
  description: z.string().min(10, "Please provide a more detailed description.").max(500),
  image: z.instanceof(File).refine(file => file.size > 0, "An image is required."),
  userLocation: z.string().optional(),
});

export async function generateContent(prevState: any, formData: FormData) {
  try {
    const validatedFields = formSchema.safeParse({
      description: formData.get("description"),
      image: formData.get("image"),
      userLocation: formData.get("userLocation"),
    });

    if (!validatedFields.success) {
      return {
        message: "Invalid form data.",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    
    const { description, image, userLocation } = validatedFields.data;

    const buffer = Buffer.from(await image.arrayBuffer());
    const dataUri = `data:${image.type};base64,${buffer.toString("base64")}`;

    const result = await generateMonasteryContent({
      artifactDescription: description,
      artifactImageUri: dataUri,
      userLocation: userLocation,
    });
    
    return {
        message: "success",
        data: result,
    }

  } catch (error) {
    console.error(error);
    return {
        message: "An unexpected error occurred. Please try again.",
        errors: null,
    }
  }
}
