import { useState } from 'react';
import styles from './StoreItem.module.css';

const StoreItem = ({ item, handleChangeQuantity, handleIncreaseQuantity, handleDecreaseQuantity, handleAddToCart, cartItems }) => {
    
    return (
        <>
            <div className={styles.storeItem}>
                <img src={item.imageUrl} alt="item image" />
                <div className={styles.info}>
                    <div className={styles.name}>{item.name}</div>
                    <div className="item-price">{item.price} €</div>
                    <div className={styles.counter}>
                        <button className={styles.quantityButton} onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>-</button>
                        <input type="text" value={item.quantity} onChange={(e) => handleChangeQuantity(item.id, e.target.value)} />
                        <button className={styles.quantityButton} onClick={() => handleIncreaseQuantity(item.id, item.quantity)}>+</button>
                    </div>
                    {cartItems.some(o => o.id === item.id) ? (<button className={styles.itemAdded} >Added to Cart</button>) : (<button className={styles.addItem} onClick={() => {
                        handleAddToCart(item.id);
                        item.isInCart = true;
                    }
                    }>
                        Add to Cart
                    </button>)}
                </div>
            </div>
        </>

    )
}

export default StoreItem;