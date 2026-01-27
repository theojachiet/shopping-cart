import styles from './StoreItem.module.css';

const StoreItem = ({ key, item, handleChangeQuantity, handleIncreaseQuantity, handleDecreaseQuantity, handleAddToCart }) => {
    return (
        <>
            <div className='storeItem' key={key}>
                <img src={item.imageUrl} alt="item image" />
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price} €</div>
                <div className="counter">
                    <button onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>-</button>
                    <input type="text" value={item.quantity} onChange={(e) => handleChangeQuantity(item.id, e.target.value)} />
                    <button onClick={() => handleIncreaseQuantity(item.id, item.quantity)}>+</button>
                </div>
                <button className="add-item" onClick={() => handleAddToCart(item.id)}>
                    Add to Cart
                </button>
            </div>
        </>

    )
}

export default StoreItem;