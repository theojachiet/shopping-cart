import { Link } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import { Outlet } from "react-router"

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <h1>Hello</h1>
      <Link to="page">to example page</Link>
    </>
  )
}

export default App
