import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <>
            <h1 className={styles.temp}>Nav Bar</h1>
            <ul>
                <li><button>Home</button></li>
                <li><button>Shop</button></li>
                <li><button>Cart</button></li>
            </ul>
        </>

    )
}

export default Navbar;