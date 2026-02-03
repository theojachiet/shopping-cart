import { useState } from 'react';
import styles from './StoreItem.module.css';

const StoreItem = ({ item, handleChangeQuantity, handleIncreaseQuantity, handleDecreaseQuantity, handleAddToCart }) => {
    
    return (
        <>
            <div className={styles.storeItem}>
                <img src={item.imageUrl} alt="item image" />
                <div className={styles.info}>
                    <div className={styles.name}>{item.name}</div>
                    <div className="item-price">{item.price} €</div>
                    <div className={styles.counter}>
                        <button onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>-</button>
                        <input type="text" value={item.quantity} onChange={(e) => handleChangeQuantity(item.id, e.target.value)} />
                        <button onClick={() => handleIncreaseQuantity(item.id, item.quantity)}>+</button>
                    </div>
                    {item.isInCart ? (<button>Added to Cart</button>) : (<button className={styles.addItem} onClick={() => {
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