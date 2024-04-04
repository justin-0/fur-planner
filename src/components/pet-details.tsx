"use client";

import { usePetContext } from "@/contexts/PetContextProvider";
import { PetData } from "@/types/types";

import Image from "next/image";

export default function PetDetails() {
  const { petDetails } = usePetContext();
  console.log(petDetails);

  return (
    <section className="h-full w-full overflow-scroll md:overflow-auto">
      {petDetails ? (
        <>
          <PetProfile petDetails={petDetails} />
          <PetInfo petDetails={petDetails} />
          <PetNotes petDetails={petDetails} />
        </>
      ) : (
        <EmptyView />
      )}
    </section>
  );
}

function EmptyView() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <h3 className="text-sm font-semibold md:text-3xl">
        Select a pet to view detailed information
      </h3>
    </div>
  );
}

function PetProfile({ petDetails }: { petDetails: PetData }) {
  return (
    <div className="flex items-center border-b border-black/10 bg-white px-5 py-5">
      <Image
        src={petDetails.imageUrl}
        alt={petDetails.name}
        height={75}
        width={75}
        className="h-[75px] w-[75px] rounded-full object-cover"
      />
      <h2 className="ml-5 text-3xl font-semibold leading-6">
        {petDetails.name}
      </h2>
    </div>
  );
}

function PetInfo({ petDetails }: { petDetails: PetData }) {
  return (
    <div className="mt-10 flex items-center justify-around">
      <div>
        <h3 className="text-center text-[15px] font-medium uppercase text-zinc-700">
          owner name
        </h3>
        <p className="mt-2 text-center text-lg text-zinc-800">
          {petDetails.ownerName}
        </p>
      </div>
      <div>
        <h3 className="text-center text-[15px] font-medium uppercase text-zinc-700">
          age
        </h3>
        <p className="mt-2 text-center text-lg text-zinc-800">
          {petDetails.age}
        </p>
      </div>
    </div>
  );
}

function PetNotes({ petDetails }: { petDetails: PetData }) {
  return (
    <div className="mx-auto mt-5 h-[200px] w-10/12 rounded-md border border-black/10 bg-white px-7 py-5 shadow-sm md:h-[350px]">
      {petDetails.notes}
    </div>
  );
}
