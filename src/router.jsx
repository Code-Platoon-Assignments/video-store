


import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: < App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "film/:id",
                element: <DetailsPage />
            }
        ]
    }
]);

export default router;