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
      <AppNavigation />
      {children}
      <AppFooter />
    </>
  );
}
