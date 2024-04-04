import AppBackgroundStyle from "@/components/app-background-pattern";
import AppFooter from "@/components/app-footer";
import AppNavigation from "@/components/app-navigation";
import { PetContextProvider } from "@/contexts/PetContextProvider";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/petsoft/api/pets",
  );

  const data = await response.json();
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
