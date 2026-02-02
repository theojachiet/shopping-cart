import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem/CartItem";
import styles from './Cart.module.css'

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
            <div className={styles.emptyContainer}>
                <p className={styles.emptyParagraph}>No items in your cart.... yet !</p>
                <img src="/src/assets/images/empty-cart.png" alt="empty cart" />
            </div>
        )
    }

    return (
        <section className={styles.cartSection}>
            <div className={styles.itemsContainer}>
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
            </div>
            <div className={styles.summaryContainer}>
                <h3>Shopping Summary</h3>
                <p>Total number of items : <strong>{cartItems.reduce((sum, item) => sum + Number(item.quantity), 0)}</strong></p>
                <p>Total Price : <strong>{totalPrice} €</strong></p>
            </div>
        </section>
    )
}

export default Cart;