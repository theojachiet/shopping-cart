import { Outlet } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import { useState } from "react"
import ErrorPage from "./pages/ErrorPage";
import useItems from "./useItems";

function App() {

  const { items, error, loading } = useItems();
  const [cartItems, setCartItems] = useState([]);

  const totalPrice = Math.round(cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0) * 100)/100;

  if (loading) return (
    <>
      <Navbar cartItems={cartItems} />
      <p>Loading...</p>
    </>
  )

  if (error) return (
    <>
      <Navbar cartItems={cartItems} />
      <ErrorPage />
    </>
  )

  return (
    <>
        <Navbar cartItems={cartItems} />
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
