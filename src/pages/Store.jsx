import StoreItem from "../components/StoreItem/StoreItem";
import { useOutletContext } from "react-router";

const Store = () => {
    const items = useOutletContext();
    
    return (
        <>
            <p>Shop items here !</p>
            {items.map(item => <StoreItem key={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price} />)}
        </>
    )
}

export default Store;