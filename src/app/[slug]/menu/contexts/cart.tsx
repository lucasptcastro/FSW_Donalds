"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

interface CartProduct extends Product {
  quantity: number;
}

export interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  toggleCart: () => void;
}

// aqui tem os valores padrões que a tipagem ICartContext receberá
export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  // Os valores do CartContext.Provider são os valores que serão passados para os filhos desse context (todos os componentes/pages que estiverem em volta desse Context)
  return (
    <CartContext.Provider
      value={{
        isOpen: isOpen,
        products: products,
        toggleCart: toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
