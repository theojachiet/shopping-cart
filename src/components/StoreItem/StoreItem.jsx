import styles from './StoreItem.module.css';

const StoreItem = ({ item, handleChangeQuantity, handleIncreaseQuantity, handleDecreaseQuantity }) => {
    return (
        <>
            <div className='storeItem' key={item.id}>
                <img src={item.imageUrl} alt="item image" />
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price} €</div>
                <div className="counter">
                    <button onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>-</button>
                    <input type="text" value={item.quantity} onChange={(e) => handleChangeQuantity(item.id, e.target.value)} />
                    <button onClick={() => handleIncreaseQuantity(item.id, item.quantity)}>+</button>
                </div>
                <button className="add-item">
                    Add to Cart
                </button>
            </div>
        </>

    )
}

export default StoreItem;