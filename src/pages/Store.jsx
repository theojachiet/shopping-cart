import { useState } from "react";
import StoreItem from "../components/StoreItem/StoreItem";
import { useOutletContext } from "react-router";

const Store = () => {
    const [fetchedItems] = useOutletContext();
    const [items, setItems] = useState(fetchedItems);

    function handleIncreaseQuantity(id) {
        setItems(list => {
            list.map(item => item.id === id ? { ...item, quantity: quantity++ } : item);
        })
    }

    function handleDecreaseQuantity(id) {
        setItems(list => {
            list.map(item => item.id === id ? { ...item, quantity: quantity-- } : item);
        })
    }

    function handleChangeQuantity(id, value) {
        setItems(list => list.map(item => item.id === id ? { ...item, quantity: value } : item))
    }

return (
    <>
        <p>Shop items here !</p>
        {items.map(item =>
            <StoreItem key={item.id} item={item} handleChangeQuantity={handleChangeQuantity} />
        )}
    </>
)
}

export default Store;