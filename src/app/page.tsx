import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-300 px-16">
      <div className="debug flex min-h-screen flex-col items-center justify-center gap-x-6 xl:flex-row">
        <Image src="/hero-img.jpg" alt="fur planner" height={400} width={500} />
        <div className="debug sm:max-w-[500px] xl:max-w-[600px]">
          <h1 className="text-5xl">
            Manage your <span className="font-bold">furry customers </span>with
            ease.
          </h1>
          <p className="mt-4 text-balance text-xl">
            Fur planner helps you keep track of pets you are caring for. Get
            liftime access for £297.
          </p>
          <div className="mt-6">
            <Link href="/login">Login</Link>

            <Link href="/register">Buy now</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
