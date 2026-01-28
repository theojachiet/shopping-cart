import { Link, Outlet } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import { useEffect, useState } from "react"

function App() {

  const [items, setItems] = useState([]);

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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
      .then(response => response.json())
      .then(data => setItems(formatProducts(data)));
  }, [])

  useEffect(() => {
    let sum = 0;

    for (let item of cartItems) {
      sum += item.quantity * item.price;
    }

    setTotalPrice(sum);
  }, [cartItems])

  return (
    <>
      <Navbar />
      <Outlet context={[items, cartItems, setCartItems, totalPrice]} />
    </>
  )
}

// const items = [
//   { id: crypto.randomUUID(), imageUrl: '#', name: 'vest', price: 40, quantity: 1 },
//   { id: crypto.randomUUID(), imageUrl: '#', name: 'pants', price: 70, quantity: 1 },
//   { id: crypto.randomUUID(), imageUrl: '#', name: 'shirt', price: 20, quantity: 1 },
//   { id: crypto.randomUUID(), imageUrl: '#', name: 'slip', price: 2, quantity: 1 },
//   { id: crypto.randomUUID(), imageUrl: '#', name: 'sweater', price: 45, quantity: 1 },
// ]

export default App
