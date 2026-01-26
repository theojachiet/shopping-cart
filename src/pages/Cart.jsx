import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem/CartItem";

const Cart = () => {
    const [fetchedItems, cartItems, setCartItems] = useOutletContext();

    if (cartItems.length === 0) {
        return (
            <p>No items in your cart yet !</p>
        )
    }

    return (
        <>
            <p>See your cart items here</p>
            {cartItems.map(item => <CartItem key={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price} />)}
        </>
    )
}

export default Cart;