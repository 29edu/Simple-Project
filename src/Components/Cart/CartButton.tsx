import { CartContext } from "../../Context/cart/CartContext";
import { useContext } from "react";

export default function CartButton() {
  const cartCont = useContext(CartContext);

  if (!cartCont) {
    return null;
  }

  const { cart } = cartCont;

  return <button>Cart : ({cart.length})</button>;
}
