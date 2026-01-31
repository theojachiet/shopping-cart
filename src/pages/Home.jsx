import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <section>
                <h2><span className="welcome">WELCOME</span> TO RANDSHOP</h2>
                <p>Here you can shop random items that have no correlation between them in any way.
                    Prices are kind of random and illustration images are ugly but fear not,
                    you will not spend any real dollars on this shop as it has no backend... </p>
                <button className="shop-now">Shop Now !</button>
            </section>
        </>
    )
}

export default Home;