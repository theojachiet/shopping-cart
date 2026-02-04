import { useState } from "react";
import StoreItem from "../components/StoreItem/StoreItem";
import { useOutletContext } from "react-router";
import styles from './Store.module.css'

const Store = () => {
    const [fetchedItems, cartItems, setCartItems, totalPrice] = useOutletContext();
    const [items, setItems] = useState(fetchedItems);

    function handleIncreaseQuantity(id, currentQuantity) {
        setItems(list => list.map(item => item.id === id ? { ...item, quantity: Number(currentQuantity) + 1 } : item))
    }

    function handleDecreaseQuantity(id, currentQuantity) {
        if (currentQuantity <= 0) return;
        setItems(list => list.map(item => item.id === id ? { ...item, quantity: Number(currentQuantity) - 1 } : item))
    }

    function handleChangeQuantity(id, value) {
        if (!Number.isInteger(Number(value))) return;

        setItems(list => list.map(item => item.id === id ? { ...item, quantity: value } : item))
    }

    function handleAddToCart(id) {
        //Check if its not already in the cart
        if (cartItems.find(item => item.id === id)) {
            alert('item already in cart');
            return;
        }

        //Add it
        const newCartItem = items.find(item => item.id === id);
        setCartItems([...cartItems,
            newCartItem
        ]);
    }

    return (
        <main>
            <div className={styles.grid}>
                {items.map(item =>
                    <StoreItem
                        key={item.id}
                        item={item}
                        handleChangeQuantity={handleChangeQuantity}
                        handleIncreaseQuantity={handleIncreaseQuantity}
                        handleDecreaseQuantity={handleDecreaseQuantity}
                        handleAddToCart={handleAddToCart}
                        cartItems={cartItems}
                    />
                )}
            </div>
        </main>
    )
}

export default Store;