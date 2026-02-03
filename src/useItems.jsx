import { useState, useEffect } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Server Error");
                }
                return response.json()
            })
            .then(data => setItems(formatProducts(data)))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [])

    return { items, error, loading }
}

function formatProducts(data) {
    return data.map(item => ({
        id: item.id,
        imageUrl: item.image,
        name: item.title,
        price: item.price,
        quantity: 1,
        isInCart: false,
    }))
}

export default useItems;