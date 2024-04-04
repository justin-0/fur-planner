"use client";

import { usePetContext } from "@/contexts/PetContextProvider";

export default function AppSearch() {
  const { handleChangeSearch, search } = usePetContext();
  return (
    <form className="h-full w-full">
      <input
        className="h-full w-full rounded-md bg-white/20 px-5  outline-none transition placeholder:text-sm placeholder:text-black/70 focus:bg-white/70 focus:ring-2"
        placeholder="Search for guest.."
        type="search"
        value={search}
        onChange={(e) => handleChangeSearch(e.target.value)}
      />
    </form>
  );
}
