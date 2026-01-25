import styles from './StoreItem.module.css';

const StoreItem = () => {
    return (
        <>
            <div className='storeItem'>
                <img src="#" alt="item image" />
                <div className="item-name">Item Name</div>
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