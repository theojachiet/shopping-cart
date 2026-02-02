import styles from './CartItem.module.css';

const CartItem = ({ item, handleChangeQuantity, handleIncreaseQuantity, handleDecreaseQuantity, handleRemove}) => {
    return (
        <>
            <div className={styles.cartItem}>
                <img src={item.imageUrl} alt="item image" />
                <div className={styles.infoText}>
                    <p className={styles.name}>{item.name}</p>
                    <div className={styles.controls}>
                        <div className={styles.quantityControl}>
                            <button onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>-</button>
                            <input type="text" value={item.quantity} onChange={(e) => handleChangeQuantity(item.id, e.target.value)} />
                            <button onClick={() => handleIncreaseQuantity(item.id, item.quantity)}>+</button>
                        </div>
                        <div className={styles.removeContainer}><button onClick={() => handleRemove(item.id)}>Remove</button></div>
                    </div>
                    <p className={styles.price}>{item.price} €</p>
                </div>
            </div>
        </>

    )
}

export default CartItem;