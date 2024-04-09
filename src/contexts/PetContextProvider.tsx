"use client";
import { createContext, useContext, useOptimistic, useState } from "react";
import { PetData } from "@/types/types";
import { addPet, removePet } from "@/app/actions/actions";

type PetContextProps = {
  pets: Array<PetData>;
  search: string;
  handleChangePetId: (id: string) => void;
  handleChangeSearch: (val: string) => void;
  handleClickEndStay: (id: string) => void;
  handleClickAddPet: (pet: Omit<PetData, "id">) => void;
  handleClickUpdatePet: (id: string, pet: Omit<PetData, "id">) => void;
  currentPetId: string | null;
  petDetails: PetData | undefined;
  numberOfPets: number;
};

type PetContextProviderProps = {
  children: React.ReactNode;
  data: Array<PetData>;
};

const PetContext = createContext<PetContextProps | null>(null);

function PetContextProvider({ data: pets, children }: PetContextProviderProps) {
  /* STATE */
  const [currentPetId, setCurrentPetId] = useState<null | string>(null);
  const [search, setSearch] = useState("");
  /* VALUES DERVIED FROM STATE, CALCULATED DURING RENDER */
  let petDetails = pets.find((pet) => pet.id === currentPetId);
  const numberOfPets = pets.length;
  /* HANDLERS FOR EVENTS */
  const handleClickEndStay = async (id: string) => {
    await removePet(id);
    setCurrentPetId(null);
  };
  const handleChangePetId = (id: string) => setCurrentPetId(id);
  const handleChangeSearch = (val: string) => setSearch(val);
  const handleClickAddPet = async (newPet: Omit<PetData, "id">) => {
    await addPet(newPet);
  };
  const handleClickUpdatePet = (id: string, newPet: Omit<PetData, "id">) => {
    // Get index of current pet selected
    const updatedPetIndex = pets.findIndex((pet) => pet.id === id);
    // Copy pets array
    let updatedPets = [...pets];
    // Current pet index of pets copy now assigned to newPet from form
    updatedPets[updatedPetIndex] = {
      id,
      ...newPet,
    };
    setPets([...updatedPets]);
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
        handleClickUpdatePet,
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
