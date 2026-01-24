import { Link } from "react-router"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <h1>Hello</h1>
      <Link to="page">to example page</Link>
    </>
  )
}

export default App
