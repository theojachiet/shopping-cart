import { Link, Outlet } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import { useEffect, useState } from "react"
import ErrorPage from "./pages/ErrorPage";

const useItems = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function formatProducts(data) {
    return data.map(item => ({
      id: item.id,
      imageUrl: item.image,
      name: item.title,
      price: item.price,
      quantity: 1,
    }))
  }

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

function App() {

  const { items, error, loading } = useItems();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;

    for (let item of cartItems) {
      sum += item.quantity * item.price;
    }

    setTotalPrice(sum);
  }, [cartItems])

  if (loading) return (
    <>
      <Navbar />
      <p>Loading...</p>
    </>
  )

  if (error) return (
    <>
      <Navbar />
      <ErrorPage />
    </>
  )

  return (
    <>
      <Navbar />
      <Outlet context={[items, cartItems, setCartItems, totalPrice]} />
    </>
  )
}

export default App
