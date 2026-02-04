import { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router';

const Navbar = ({ cartItems }) => {

    const [toggled, setToggled] = useState(false);

    function toggleMenu() {
        setToggled(!toggled);
    }

    return (
            <header>
                <h1>RANDSHOP</h1>
                <button className={styles.menuToggle} onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
                </button>
                {toggled ? (
                    <ul className={styles.mobileMenu}>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/store">STORE</Link></li>
                    <li><Link to="/cart">CART <span className={styles.cartCount}>{cartItems.length}</span></Link></li>
                </ul>
                ) : (<></>)}
                <ul className={styles.desktopMenu}>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/store">STORE</Link></li>
                    <li><Link to="/cart">CART <span className={styles.cartCount}>{cartItems.length}</span></Link></li>
                </ul>
            </header>

    )
}

export default Navbar;