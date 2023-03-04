import AboutPage from "../components/pages/AboutPage"
import IdTodo from "../components/pages/IdTodo"
import MainPage from "../components/pages/MainPage"

export const PATHS = {
    MAIN: '/',
    ABOUT: '/about',
    TODO: '/:id',
}

export const routes = [
    {
        path: PATHS.MAIN,
        element: <MainPage/>
    },
    {
        path: PATHS.ABOUT,
        element: <AboutPage/>
    },
    {
        path: PATHS.TODO,
        element: <IdTodo/>
    },
]