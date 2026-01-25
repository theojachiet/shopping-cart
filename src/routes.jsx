import { element } from 'prop-types';
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import Store from './pages/Store.jsx';
import Cart from './pages/Cart.jsx';


const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "home", element: <Home /> },
            { path: "store", element: <Store /> },
            { path: "cart", element: <Cart /> },
        ],
        errorElement: <ErrorPage />,
    },
];

export default routes;