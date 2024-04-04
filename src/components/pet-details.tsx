"use client";

import { usePetContext } from "@/contexts/PetContextProvider";

export default function PetDetails() {
  const { currentPetId, pets } = usePetContext();
  const currentPet = pets.filter((p) => p.id === currentPetId);

  console.log(currentPet);

  return <section className="h-full w-full">Pet Details</section>;
}
