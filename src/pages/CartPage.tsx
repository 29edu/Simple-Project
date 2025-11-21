import { CartContext } from "../Context/cart/CartContext";
import { useContext} from "react";
import { BsCartXFill } from "react-icons/bs";
import CartItemCard from "../Components/Cart/CartItemCard";

export default function CartPage() {
    const cartCont = useContext(CartContext);

    if(!cartCont) {
        return null;
    }

    const {cart} = cartCont;

    const total = cart.reduce((sum, item) => 
        sum + item.price * item.quantity, 0
    )

    if(cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
                <div className="text-6xl">
                    <BsCartXFill />
                </div>
                <p className="mt-4 text-xl font-semibold">Your cart is empty</p>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6">
                Your Cart
            </h2>
            <div className="space-y-4">
                {cart.map((item) => (
                    <CartItemCard key={item.id} item={item} />
                ))}
            </div>

            <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-xl font-semibold">
                    Grand Total: <span className="font-bold"> ₹ {total}</span>
                </p>

                <button
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                >
                    Checkout
                </button>
            </div>
        </div>
    )
}