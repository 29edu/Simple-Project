import { HiOutlineHomeModern } from "react-icons/hi2";
import CartButton from "../Cart/CartButton";

function CartNavbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 shadow">

            {/* Left Component */}
            <div className="text-2xl font-bold cursor-pointer">
                MyStore
            </div>
            <div className="flex space-x-6 text-lg">
                middle section 
                <HiOutlineHomeModern />
            </div>
            <div className="">
                <CartButton />
            </div>
        </nav>
    )
}

export default CartNavbar;