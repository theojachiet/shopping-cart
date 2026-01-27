import styles from './CartItem.module.css';

const CartItem = ({key, item, handleChangeQuantity, handleIncreaseQuantity, handleDecreaseQuantity, handleRemove}) => {
    return (
        <>
            <div className='cart-item' key={key}>
                <img src={item.imageUrl} alt="item image" />
                <p>{item.name}</p>
                <div className="quantity-control">
                    <button onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>-</button>
                    <input type="text" value={item.quantity} onChange={(e) => handleChangeQuantity(item.id, e.target.value)} />
                    <button onClick={() => handleIncreaseQuantity(item.id, item.quantity)}>+</button>
                </div>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
                <p>{item.price} €</p>
            </div>
        </>

    )
}

export default CartItem;