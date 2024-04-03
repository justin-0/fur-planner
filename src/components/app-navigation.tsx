"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";
import { cn } from "@/lib/utils";
const routes = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    key: "account",
    label: "Account",
    path: "/app/account",
  },
];
export default function AppNavigation() {
  const currentPath = usePathname();

  return (
    <nav className="flex items-center justify-between border-b border-black/25 pb-5">
      <span>🐶</span>
      <ul className="flex gap-x-5">
        {routes.map((r) => {
          return (
            <Link
              key={r.key}
              href={r.path}
              className={cn(
                "rounded-md  px-2 py-1 text-white/80 hover:text-white",
                currentPath === r.path && "bg-black/20",
              )}
            >
              {r.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
