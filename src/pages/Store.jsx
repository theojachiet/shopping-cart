import { useState } from "react";
import StoreItem from "../components/StoreItem/StoreItem";
import { useOutletContext } from "react-router";

const Store = () => {
    const [fetchedItems] = useOutletContext();
    const [items, setItems] = useState(fetchedItems);

    function handleIncreaseQuantity(id, currentQuantity) {
        setItems(list => list.map(item => item.id === id ? { ...item, quantity: Number(currentQuantity) + 1 } : item))
    }

    function handleDecreaseQuantity(id, currentQuantity) {
        if (currentQuantity <= 0) return;
        setItems(list => list.map(item => item.id === id ? { ...item, quantity: Number(currentQuantity) - 1 } : item))
    }

    function handleChangeQuantity(id, value) {
        if (!Number.isInteger(Number(value))) return;

        setItems(list => list.map(item => item.id === id ? { ...item, quantity: value } : item))
    }

    return (
        <>
            <p>Shop items here !</p>
            {items.map(item =>
                <StoreItem
                    key={item.id}
                    item={item}
                    handleChangeQuantity={handleChangeQuantity}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                    handleDecreaseQuantity={handleDecreaseQuantity}
                />
            )}
        </>
    )
}

export default Store;