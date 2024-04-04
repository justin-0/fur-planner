"use client";
import { usePetContext } from "@/contexts/PetContextProvider";
import Image from "next/image";

export default function PetList() {
  const { pets, handleChangePetId } = usePetContext();
  return (
    <ul className="border-b border-black/10 bg-white">
      {pets.map((pet) => {
        return (
          <li key={pet.id}>
            <button
              onClick={() => handleChangePetId(pet.id)}
              className="flex h-[70px] w-full cursor-pointer items-center gap-4 px-5 text-base transition hover:bg-zinc-200/30 focus:bg-zinc-200/30"
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
