"use server";

import prisma from "@/lib/db";
import { wait } from "@/lib/utils";
import { PetData } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function addPet(formData: any) {
  await wait(1500);
  try {
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
    return {
      message: "success",
    };
  } catch (error) {
    return {
      message: "error",
    };
  }
}

export async function removePet(id: string) {
  await prisma.pet.delete({
    where: {
      id,
    },
  });
  revalidatePath("/app", "layout");
}

export async function editPet(id: string, formData: any) {
  await prisma.pet.update({
    where: {
      // ... provide filter here
      id,
    },
    data: {
      // ... provide data here
      name: formData.get("name"),
      ownerName: formData.get("ownerName"),
      imageUrl: formData.get("imageUrl"),
      age: Number(formData.get("age")),
      notes: formData.get("notes"),
    },
  });
  revalidatePath("/app", "layout");
}
