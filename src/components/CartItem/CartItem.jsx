import styles from './CartItem.module.css';

const CartItem = ({item, handleChangeQuantity, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveCart}) => {
    return (
        <>
            <div className='cart-item' key={item.id}>
                <img src={item.imageUrl} alt="item image" />
                <p>{item.name}</p>
                <div className="quantity-control">
                    <button onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>-</button>
                    <input type="text" value={item.quantity} onChange={(e) => handleChangeQuantity(item.id, e.target.value)} />
                    <button onClick={() => handleIncreaseQuantity(item.id, item.quantity)}>+</button>
                </div>
                <button>Remove</button>
                <p>{item.price} €</p>
            </div>
        </>

    )
}

export default CartItem;