import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem/CartItem";
import { useState } from "react";

const Cart = () => {
    const [fetchedItems, cartItems, setCartItems, totalPrice] = useOutletContext();

    function handleIncreaseQuantity(id, currentQuantity) {
        setCartItems(list => list.map(item => item.id === id ? { ...item, quantity: Number(currentQuantity) + 1 } : item));
    }

    function handleDecreaseQuantity(id, currentQuantity) {
        if (currentQuantity <= 0) return;
        setCartItems(list => list.map(item => item.id === id ? { ...item, quantity: Number(currentQuantity) - 1 } : item));
    }

    function handleChangeQuantity(id, value) {
        if (!Number.isInteger(Number(value))) return;

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