import { createContext } from "react";

export type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export type cartContextType = {
    cart: CartItem[];
    addItem: (item: CartItem) => void; // It means additem is an object, ess function ko CartItem(item) object dena parta hai and yah kuch bhi nahi return karega (void)
    removeItem: (id: number) => void
    updateQuantity: (id: number, newQty: number) => void;
}

export type CartItemCardProps = {
    item: CartItem
}

export const CartContext = createContext<cartContextType | null> (null);