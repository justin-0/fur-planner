import Image from "next/image";

export default function PetList() {
  return (
    <ul className="border-b border-black/10 bg-white">
      <li>
        <button className="flex h-[70px] w-full cursor-pointer items-center gap-4 px-5 text-base transition hover:bg-zinc-200/30 focus:bg-zinc-200/30">
          <Image
            src="/dogdp.jpg"
            alt="dog display picture"
            height={50}
            width={50}
            className="rounded-full object-cover"
          />
          <span>Bridie</span>
        </button>
      </li>
    </ul>
  );
}
