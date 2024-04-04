"use client";
import { usePetContext } from "@/contexts/PetContextProvider";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PetList() {
  const { pets, handleChangePetId, currentPetId, search } = usePetContext();

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(search),
  );

  return (
    <ul className="border-b border-black/10 bg-white">
      {filteredPets.map((pet) => {
        return (
          <li key={pet.id}>
            <button
              onClick={() => handleChangePetId(pet.id)}
              className={cn(
                "flex h-[70px] w-full cursor-pointer items-center gap-4 px-5 text-base transition hover:bg-zinc-200/30 focus:bg-zinc-200/30",
                {
                  "bg-zinc-200/30": currentPetId === pet.id,
                },
              )}
            >
              <Image
                src={pet.imageUrl}
                alt="Pet image"
                width={45}
                height={45}
                className="h-[45px] w-[45px] rounded-full object-cover"
              />
              <span>{pet.name}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
