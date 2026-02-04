import styles from './Navbar.module.css';
import { Link } from 'react-router';

const Navbar = ({ cartItems }) => {
    return (
        <>
            <header>
                <h1>RANDSHOP</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
                <ul>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/store">STORE</Link></li>
                    <li><Link to="/cart">CART <span className={styles.cartCount}>{cartItems.length}</span></Link></li>
                </ul>
            </header>
        </>

    )
}

export default Navbar;