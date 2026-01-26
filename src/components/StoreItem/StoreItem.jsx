import styles from './StoreItem.module.css';

const StoreItem = ({id, imageUrl, name, price}) => {
    return (
        <>
            <div className='storeItem' key={id}>
                <img src={imageUrl} alt="item image" />
                <div className="item-name">{name}</div>
                <div className="item-price">{price} €</div>
                <div className="counter">
                    <button>-</button>
                    <input type="text" />
                    <button>+</button>
                </div>
                <button className="add-item">
                    Add to Cart
                </button>
            </div>
        </>

    )
}

export default StoreItem;