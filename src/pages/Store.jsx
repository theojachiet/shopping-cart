import StoreItem from "../components/StoreItem/StoreItem";

const Store = () => {
    return (
        <>
            <p>Shop items here !</p>
            {items.map(item => <StoreItem key={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price} />)}
        </>
    )
}

const items = [
    { id: crypto.randomUUID(), imageUrl: '#', name: 'vest', price: 40 },
    { id: crypto.randomUUID(), imageUrl: '#', name: 'pants', price: 70 },
    { id: crypto.randomUUID(), imageUrl: '#', name: 'shirt', price: 20 },
    { id: crypto.randomUUID(), imageUrl: '#', name: 'slip', price: 2 },
    { id: crypto.randomUUID(), imageUrl: '#', name: 'sweater', price: 45 },
]

export default Store;