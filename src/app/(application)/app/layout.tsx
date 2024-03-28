import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <h1>Navigation</h1>
      {children}
      <h1>Footer</h1>
    </>
  );
}
