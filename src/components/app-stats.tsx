"use client";

import { usePetContext } from "@/contexts/PetContextProvider";

export default function AppStats() {
  const { numberOfPets } = usePetContext();
  return (
    <section className="text-center text-white">
      <p className="text-2xl font-bold leading-6">{numberOfPets}</p>
      <p className="text-lg opacity-85">current guests</p>
    </section>
  );
}
