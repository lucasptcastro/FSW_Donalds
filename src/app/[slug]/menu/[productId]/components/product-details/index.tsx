"use client";

import { Prisma } from "@prisma/client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
          avatarImageUrl: true;
        };
      };
    };
  }>;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <>
      <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl p-5">
        {/* RESTAURANTE */}
        <div className="flex items-center gap-1.5">
          <Image
            src={product.restaurant.avatarImageUrl}
            alt={product.restaurant.name}
            width={16}
            height={16}
            className="rounded-full"
          />

          <p className="text-cs text-muted-foreground">
            {product.restaurant.name}
          </p>
        </div>

        <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {formatCurrency(product.price)}
          </h3>

          <div className="flex items-center gap-3 text-center">
            <Button variant="outline" className="h-8 w-8 rounded-xl">
              <ChevronLeftIcon />
            </Button>
            <p className="w-4"></p>
            <Button variant="destructive" className="h-8 w-8 rounded-xl">
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
