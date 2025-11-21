// Here, global state cart will be created

// UseEffct cart me use hoga jab when we want side effects after additem or remove item
// like localstorage me data save karna
// server pe cart sync karna
// Ya analytics log karna

import React, { useState } from "react";
import {
  CartContext,
  type CartItem,
  type cartContextType,
} from "./CartContext";

type ChildrenProps = {
  children: React.ReactNode;
};

export function CartProvider({ children }: ChildrenProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    const existingItem = cart.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.quantity = existingItem.quantity + 1;

      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((it) => it.id !== id));
  };

  const updateQuantity = (id: number, newQty: number) => {
    
    if(newQty == 0) {
        removeItem(id);
        return;
    }
    
    setCart(cart.map(item => 
        item.id === id ? {...item, quantity: newQty} : item
    ))
  }

  const value: cartContextType = {
    cart,
    addItem,
    removeItem,
    updateQuantity
  };

  

  return (
    // Whatever component is inside the Cart Provider they can access the global cart anywhere
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}
