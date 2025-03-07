import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-lvh flex-col items-center justify-center gap-20">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={"/gs-donalds_restaurant.webp"}
          alt={"aa"}
          width={82}
          height={82}
        />

        <h2 className="font-semibold">GS Donalds</h2>
      </div>

      <Link href={"/gs-donalds"}>
        <Button variant={"outline"} className="bg-[#383838] text-white">
          Ir para o catálogo
        </Button>
      </Link>
    </div>
  );
}
