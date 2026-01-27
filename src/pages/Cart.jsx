import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem/CartItem";

const Cart = () => {
    const [fetchedItems, cartItems, setCartItems] = useOutletContext();

    function handleIncreaseQuantity(id, currentQuantity) {
        setCartItems(list => list.map(item => item.id === id ? { ...item, quantity: Number(currentQuantity) + 1 } : item))
    }

    function handleDecreaseQuantity(id, currentQuantity) {
        if (currentQuantity <= 0) return;
        setCartItems(list => list.map(item => item.id === id ? { ...item, quantity: Number(currentQuantity) - 1 } : item))
    }

    function handleChangeQuantity(id, value) {
        if (!Number.isInteger(Number(value))) return;

        setCartItems(list => list.map(item => item.id === id ? { ...item, quantity: value } : item))
    }

    if (cartItems.length === 0) {
        return (
            <p>No items in your cart yet !</p>
        )
    }

    return (
        <>
            <p>See your cart items here</p>
            {cartItems.map(item =>
                <CartItem
                    key={item.id}
                    item={item}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                    handleDecreaseQuantity={handleDecreaseQuantity}
                    handleChangeQuantity={handleChangeQuantity}
                />
            )}
        </>
    )
}

export default Cart;