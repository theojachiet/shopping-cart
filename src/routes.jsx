import App from './App.jsx'
import Page from './Page.jsx'
import ErrorPage from './ErrorPage.jsx';


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "page",
        element: <Page />,
    },
];

export default routes;