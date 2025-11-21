
import { useContext } from "react"
import { CartContext } from "../../Context/cart/CartContext"
import {type CartItemCardProps } from "../../Context/cart/CartContext"

function CartItemCard({item} : CartItemCardProps) {

    const cartContext = useContext(CartContext);

    if(!cartContext) {
        return null;
    }

    const { removeItem, updateQuantity} = cartContext;


    return (
        <div>
            <div className="grid grid-cols-3 gap-4 border rounded-lg shadow-md bg-white">
                {/* Image Column */}
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />

                <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold">
                        {item.name}
                    </p>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 bg-gray-200 rounded"
                        >
                            -
                        </button>

                        <span> {item.quantity} </span>
                        <button
                            onClick={() => updateQuantity(item.id , item.quantity + 1)}
                            className="px-2 py-1 bg-gray-200 rounded"
                        >
                            +
                        </button>
                        <button
                            onClick={() => removeItem(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                </div>

                <p className="text-xl font-bold text-right">
                    ₹ {item.price * item.quantity}
                </p>
            </div>
        </div>
    )
}

export default CartItemCard;