import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home/Home";
import Projects from "../../Components/Home/Projects/Projects";
import Resume from "../../Components/Home/Resume/Resume";
import Main from "../../Layouts/Main/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children : [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/resume",
                element: <Resume></Resume>
            }
        ]
    }
])