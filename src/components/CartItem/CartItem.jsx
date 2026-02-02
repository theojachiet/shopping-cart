import styles from './CartItem.module.css';

const CartItem = ({ item, handleChangeQuantity, handleIncreaseQuantity, handleDecreaseQuantity, handleRemove }) => {
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
                        <div className={styles.removeContainer}><button className={styles.remove} onClick={() => handleRemove(item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg></button>
                        </div>
                    </div>
                    <p className={styles.price}>{item.price} €</p>
                </div>
            </div>
        </>

    )
}

export default CartItem;