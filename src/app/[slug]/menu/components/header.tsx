"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

// o Pick serve para coletar apenas algumas variáveis de uma tipagem. No caso, restaurant vai receber "coverImageUrl" ou "name" para não precisar receber todas as tipagens de Restaurant
interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  const { slug } = useParams<{ slug: string }>();

  const router = useRouter();

  const handleOrdersClick = () => router.push(`/${slug}/orders`);

  return (
    <div className="relative h-[250px] w-full">
      <Button
        onClick={() => router.back()}
        className="absolute left-4 top-4 z-50 rounded-full"
        variant={"secondary"}
        size={"icon"}
      >
        <ChevronLeftIcon />
      </Button>

      <Image
        className="object-cover"
        src={restaurant?.coverImageUrl}
        alt={restaurant?.name}
        fill
      />

      <Button
        onClick={handleOrdersClick}
        className="absolute right-4 top-4 z-50 rounded-full"
        variant={"secondary"}
        size={"icon"}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default RestaurantHeader;
