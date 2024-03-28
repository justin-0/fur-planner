import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Pet Care Management - Fur Planner",
  description: "Manage and keep track of all your furry visitors with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-200">{children}</body>
    </html>
  );
}
