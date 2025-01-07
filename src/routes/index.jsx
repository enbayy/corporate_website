import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/homePage/page";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
        ],
    },
]);

export default routes;