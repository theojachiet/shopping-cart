import styles from './Navbar.module.css';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <>
            <h1 className={styles.temp}>Nav Bar</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/store">Store</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </>

    )
}

export default Navbar;