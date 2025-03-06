"use server";
// diz que o arquivo terá server actions (funciona como uma espécie de rota de API)

import { ConsumptionMethod } from "@prisma/client";

import { db } from "@/lib/prisma";

import { removeCpfPunctuation } from "../helpers/cpf";

interface CreateOrderInput {
  customerName: string;
  customerCpf: string;
  products: Array<{ id: string; quantity: number }>;
  consumptionMethod: ConsumptionMethod;
  slug: string;
}

export const createOrder = async (input: CreateOrderInput) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      slug: input.slug,
    },
  });

  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  // para não ter que passar o preço pela server action("rota da api"), o preço é consultado por essa função. Evitando brechas de vulnerabilidade
  const productsWithPrices = await db.product.findMany({
    where: {
      id: {
        in: input.products.map((product) => product.id),
      },
    },
  });

  // pega os preços e quantidades de cada produto recebido no input
  const productsWithPricesAndQuantities = input.products.map((product) => ({
    productId: product.id,
    quantity: product.quantity,
    price: productsWithPrices.find((p) => p.id)!.price,
  }));

  // aqui é feita a criação da order diretamente no banco
  await db.order.create({
    data: {
      status: "PENDING",
      CustomerName: input.customerName,
      CustomerCpf: removeCpfPunctuation(input.customerCpf),
      OrderProduct: {
        createMany: {
          data: productsWithPricesAndQuantities,
        },
      },
      total: productsWithPricesAndQuantities.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0,
      ),
      consumptionMethod: input.consumptionMethod,
      restaurantId: restaurant.id,
    },
  });
};
