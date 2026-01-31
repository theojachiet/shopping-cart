import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem/CartItem";

const Cart = () => {
    const [fetchedItems, cartItems, setCartItems, totalPrice] = useOutletContext();

    function handleIncreaseQuantity(id, currentQuantity) {
        setCartItems(list => list.map(item => item.id === id ? { ...item, quantity: Number(currentQuantity) + 1 } : item));
    }

    function handleDecreaseQuantity(id, currentQuantity) {
        //Remove if quantity is 0 or less
        if (currentQuantity === 1 || currentQuantity <= 0) {
            handleRemove(id);
            return;
        }

        setCartItems(list => list.map(item => item.id === id ? { ...item, quantity: Number(currentQuantity) - 1 } : item));
    }

    function handleChangeQuantity(id, value) {
        if (!Number.isInteger(Number(value))) return;

        //Remove if 0 is typed
        if (Number(value) === 0 && value != '') {
            handleRemove(id);
            return;
        }

        setCartItems(list => list.map(item => item.id === id ? { ...item, quantity: value } : item));
    }

    function handleRemove(id) {
        setCartItems(list => list.filter(item => item.id !== id));
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
                    handleRemove={handleRemove}
                />
            )}
            <p>Total : {totalPrice} €</p>
        </>
    )
}

export default Cart;