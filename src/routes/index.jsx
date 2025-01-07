import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/homePage/page";
import AboutPage from "../pages/aboutPage/page";

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
        ],
    },
]);

export default routes;