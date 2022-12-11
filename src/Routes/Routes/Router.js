import { createBrowserRouter } from "react-router-dom";
import About from "../../Components/About/About";
import Blogs from "../../Components/Blogs/Blogs";
import Contact from "../../Components/Home/Contact/Contact";
import Home from "../../Components/Home/Home/Home";
import Projects from "../../Components/Home/Projects/Projects";
import SingleProjects from "../../Components/Home/Projects/SingleProjects";
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
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/singleProjects/:id",
                element: <SingleProjects></SingleProjects>,
                loader : ({params}) => fetch(`http://localhost:5000/api/v1/projects/${params.id}`)
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            }
        ]
    }
])