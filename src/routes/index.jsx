import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/homePage/page";
import AboutPage from "../pages/aboutPage/page";
import Contactpage from "../pages/contactPage/page";
import ProductPage from "../pages/productPage/page";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/aboutPage',
                element: <AboutPage />,
            },
            {
                path: '/contactPage',
                element: <Contactpage />,
            },
            {
                path: '/productPage',
                element: <ProductPage />,
            },
        ],
    },
]);

export default routes;