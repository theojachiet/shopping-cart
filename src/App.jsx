import { Outlet } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import { useState } from "react"
import ErrorPage from "./pages/ErrorPage";
import useItems from "./useItems";

function App() {

  const { items, error, loading } = useItems();
  const [cartItems, setCartItems] = useState([]);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

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
      <div className="general-container">
        <Navbar />
        <Outlet context={[
          items,
          cartItems,
          setCartItems,
          totalPrice
        ]} />
      </div>
    </>
  )
}

export default App
