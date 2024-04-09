"use server";

import prisma from "@/lib/db";
import { wait } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export async function addPet(formData: any) {
  await wait(4000);
  await prisma.pet.create({
    data: {
      name: formData.get("name"),
      ownerName: formData.get("ownerName"),
      imageUrl:
        formData.get("imageUrl") ||
        "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png",
      age: Number(formData.get("age")),
      notes: formData.get("notes"),
    },
  });
  revalidatePath("/app", "layout");
}

export async function removePet(id: string) {
  await prisma.pet.delete({
    where: {
      id,
    },
  });
  revalidatePath("/app", "layout");
}
