"use client";

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
  product: Pick<Product, "name" | "imageUrl">;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const router = useRouter();

  return (
    <div className="relative min-h-[300px] w-full">
      <Button
        className="absolute left-4 top-4 z-50 rounded-full"
        variant={"secondary"}
        size={"icon"}
        onClick={() => router.back()}
      >
        <ChevronLeftIcon />
      </Button>

      <Image
        src={product.imageUrl}
        fill
        alt={product.name}
        className="object-contain"
      />

      <Button
        className="absolute right-4 top-4 z-50 rounded-full"
        variant={"secondary"}
        size={"icon"}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default ProductHeader;
