import styles from './Navbar.module.css';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <>
            <header>
                <h1>RANDSHOP</h1>
                <ul>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/store">STORE</Link></li>
                    <li><Link to="/cart">CART</Link></li>
                </ul>
            </header>
        </>

    )
}

export default Navbar;