import { Link } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import { Outlet } from "react-router"

function App() {

  return (
    <>
      <Navbar />
      <Outlet context={items}/>
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

export default App
