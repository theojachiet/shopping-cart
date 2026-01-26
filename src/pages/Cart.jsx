import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem/CartItem";

const Cart = () => {
    const [items, handleChangeQuantity] = useOutletContext();

    return (
        <>
            <p>See your cart items here</p>
            {items.map(item => <CartItem key={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price} />)}
        </>
    )
}

export default Cart;