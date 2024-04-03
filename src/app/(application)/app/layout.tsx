import AppBackgroundStyle from "@/components/app-background-pattern";
import AppFooter from "@/components/app-footer";
import AppNavigation from "@/components/app-navigation";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <AppBackgroundStyle />
      <div className="flex min-h-screen w-screen flex-col px-5 py-6 sm:px-16">
        <AppNavigation />
        {children}
        <AppFooter />
      </div>
    </>
  );
}
