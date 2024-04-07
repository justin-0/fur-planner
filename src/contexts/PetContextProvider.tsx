"use client";
import { createContext, useContext, useState } from "react";
import { PetData } from "@/types/types";

type PetContextProps = {
  pets: Array<PetData>;
  search: string;
  handleChangePetId: (id: string) => void;
  handleChangeSearch: (val: string) => void;
  handleClickEndStay: (id: string) => void;
  handleClickAddPet: (pet: PetData) => void;
  currentPetId: string | null;
  petDetails: PetData | undefined;
  numberOfPets: number;
};

type PetContextProviderProps = {
  children: React.ReactNode;
  data: Array<PetData>;
};

const PetContext = createContext<PetContextProps | null>(null);

function PetContextProvider({ data, children }: PetContextProviderProps) {
  const [pets, setPets] = useState(data);
  const [currentPetId, setCurrentPetId] = useState<null | string>(null);
  const [search, setSearch] = useState("");

  const petDetails = pets.find((pet) => pet.id === currentPetId);
  const numberOfPets = pets.length;

  const handleClickEndStay = (id: string) => {
    setPets((p) => p.filter((pet) => pet.id !== id));
    setCurrentPetId(null);
  };
  const handleChangePetId = (id: string) => setCurrentPetId(id);
  const handleChangeSearch = (val: string) => setSearch(val);
  const handleClickAddPet = (newPet: PetData) => {
    setPets((p) => [
      ...p,
      {
        ...newPet,
        id: String(numberOfPets + 1),
      },
    ]);
  };

  return (
    <PetContext.Provider
      value={{
        pets,
        search,
        currentPetId,
        petDetails,
        numberOfPets,
        handleChangePetId,
        handleChangeSearch,
        handleClickEndStay,
        handleClickAddPet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}

const usePetContext = () => {
  const value = useContext(PetContext);
  if (!value)
    throw new Error(
      "PetContext is not available outside of PetContext.Provider",
    );
  return value;
};

export { PetContextProvider, usePetContext };
