import AppBackgroundStyle from "@/components/app-background-pattern";
import AppFooter from "@/components/app-footer";
import AppNavigation from "@/components/app-navigation";
import { PetContextProvider } from "@/contexts/PetContextProvider";
import React from "react";
import prisma from "@/lib/db";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const data = await prisma.pet.findMany();

  return (
    <>
      <AppBackgroundStyle />
      <div className="flex min-h-screen w-screen flex-col px-5 py-6 sm:px-24">
        <AppNavigation />
        <PetContextProvider data={data}>{children}</PetContextProvider>
        <AppFooter />
      </div>
    </>
  );
}
