"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {

  const [cart, setCart] = useState<any[]>([]);

  function addToCart(card: any) {

    setCart([...cart, card]);

  }

  function removeFromCart(index: number) {

    setCart(cart.filter((_, i) => i !== index));

  }

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export function useCart() {

  return useContext(CartContext);

}
