import { Link, Outlet } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import { useState } from "react"

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar />
      <Outlet context={[items, cartItems, setCartItems]} />
    </>
  )
}

const items = [
  { id: crypto.randomUUID(), imageUrl: '#', name: 'vest', price: 40, quantity: 1 },
  { id: crypto.randomUUID(), imageUrl: '#', name: 'pants', price: 70, quantity: 1 },
  { id: crypto.randomUUID(), imageUrl: '#', name: 'shirt', price: 20, quantity: 1 },
  { id: crypto.randomUUID(), imageUrl: '#', name: 'slip', price: 2, quantity: 1 },
  { id: crypto.randomUUID(), imageUrl: '#', name: 'sweater', price: 45, quantity: 1 },
]

export default App
