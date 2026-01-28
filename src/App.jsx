import { Link, Outlet } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import { useEffect, useState } from "react"
import ErrorPage from "./pages/ErrorPage";
import useItems from "./useItems";

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
      <Outlet context={[
        items,
        cartItems,
        setCartItems,
        totalPrice
      ]} />
    </>
  )
}

export default App
