"use client";
import { createContext, useContext, useState } from "react";
import { PetData } from "@/types/types";

type PetContextProps = {
  pets: Array<PetData>;
  handleChangePetId: (id: string) => void;
  currentPetId: string | null;
};

type PetContextProviderProps = {
  children: React.ReactNode;
  data: Array<PetData>;
};

const PetContext = createContext<PetContextProps | null>(null);

function PetContextProvider({ data, children }: PetContextProviderProps) {
  const [pets, setPets] = useState(data);
  const [currentPetId, setCurrentPetId] = useState<null | string>(null);
  const handleChangePetId = (id: string) => setCurrentPetId(id);
  return (
    <PetContext.Provider
      value={{
        pets,
        currentPetId,
        handleChangePetId,
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
