import styles from './Home.module.css';
import { Link } from 'react-router';


const Home = () => {
    return (
        <main>
            <div className={styles.text}>
                <h2><div className={styles.welcome}>WELCOME</div> TO RANDSHOP</h2>
                <p className={styles.intro}>Here you can shop random items that have no correlation between them in any way.
                    Prices are kind of random and illustration images are ugly but fear not,
                    you will not spend any real dollars on this shop as it has no backend... </p>
                <Link to='/store' className={styles.now}>SHOP NOW !</Link>
            </div>

            <img src="/src/assets/images/shopping-illustration.jpg" alt="phone shopping" />
        </main>
    )
}

export default Home;