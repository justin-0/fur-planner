import AppSearch from "@/components/app-search";
import AppStats from "@/components/app-stats";
import Heading from "@/components/heading";
import PetDetails from "@/components/pet-details";
import PetList from "@/components/pet-list";
import StyleBlock from "@/components/style-block";
import React, { Suspense } from "react";

export default async function Page() {
  return (
    <main>
      <div className="mt-10 flex items-center justify-between">
        <section>
          <Heading>
            Fur <span className="font-semibold">Planner</span>
          </Heading>
          <p className="text-lg text-white opacity-85">
            Manage current pet guests
          </p>
        </section>
        <AppStats />
      </div>

      <div className="grid-col-1 mt-8 grid grid-rows-[45px_280px_375px] gap-4 md:h-[600px] md:grid-cols-3 md:grid-rows-[45px_1fr]">
        <div className="md:col-span-1 md:row-span-1">
          <AppSearch />
        </div>
        <div className="md:col-start-1 md:row-start-2">
          <StyleBlock>
            <PetList />
          </StyleBlock>
        </div>
        <div className="md:col-span-full md:col-start-2 md:row-span-full md:row-start-1">
          <StyleBlock>
            <PetDetails />
          </StyleBlock>
        </div>
      </div>
    </main>
  );
}
