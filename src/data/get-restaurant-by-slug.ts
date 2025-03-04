import { db } from "@/lib/prisma";

const getRestaurantBySlug = async (slug: string) => {
  const restaurant = await db.restaurant.findUnique({ where: { slug: slug } });

  return restaurant;
};

export default getRestaurantBySlug;
