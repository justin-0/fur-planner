import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-300 px-5 sm:px-16">
      <div className=" flex min-h-screen flex-col items-center justify-center lg:flex-row lg:gap-x-10 xl:gap-x-20">
        <Image src="/hero-img.jpg" alt="fur planner" height={400} width={500} />
        <div className=" sm:max-w-[500px] xl:max-w-[600px]">
          <h1 className="mt-6 text-3xl sm:mt-0 sm:text-5xl">
            Manage your <span className="font-bold">furry customers </span>with
            ease.
          </h1>
          <p className="mt-4 text-balance md:text-xl">
            Fur planner helps you keep track of pets you are caring for. Get
            lifetime access for £297.
          </p>
          <div className="mt-6 space-x-4">
            <Button size={"lg"} variant={"secondary"} asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size={"lg"} asChild>
              <Link href="/register">Buy now</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
