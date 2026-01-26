import styles from './CartItem.module.css';

const CartItem = ({id, imageUrl, name, price}) => {
    return (
        <>
            <div className='cart-item' key={id}>
                <img src={imageUrl} alt="item image" />
                <p>{name}</p>
                <div className="quantity-control">
                    <button>-</button>
                    <input type="text" />
                    <button>+</button>
                </div>
                <button>Remove</button>
                <p>{price} €</p>
            </div>
        </>

    )
}

export default CartItem;