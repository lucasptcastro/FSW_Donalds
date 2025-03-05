"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

interface CartProduct
  extends Pick<Product, "id" | "name" | "imageUrl" | "price"> {
  quantity: number;
}

export interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  toggleCart: () => void;
  addProduct: (product: CartProduct) => void;
}

// aqui tem os valores padrões que a tipagem ICartContext receberá
export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
  addProduct: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const addProduct = (product: CartProduct) => {
    // Verifica se o produto está no carrinho
    const productIsAlreadyOnTheCart = products.some(
      (prevProduct) => prevProduct.id === product.id,
    );

    // Se o produto não estiver no carrinho adiciona
    if (!productIsAlreadyOnTheCart) {
      return setProducts((prevProducts) => [...prevProducts, product]);
    }

    // Se o produto estiver no carrinho incrementa o valor da quantidade
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id === product.id) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + product.quantity,
          };
        }

        return prevProduct;
      });
    });
  };

  // Os valores do CartContext.Provider são os valores que serão passados para os filhos desse context (todos os componentes/pages que estiverem em volta desse Context)
  return (
    <CartContext.Provider
      value={{
        isOpen: isOpen,
        products: products,
        toggleCart: toggleCart,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
