import AboutPage from "../components/pages/AboutPage"
import ContactsPage from "../components/pages/Contacts"
import IdTodo from "../components/pages/IdTodo"
import MainPage from "../components/pages/MainPage"

export const PATHS = {
    MAIN: '/',
    ABOUT: '/about',
    CONTACTS: '/contacts',
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
        path: PATHS.CONTACTS,
        element: <ContactsPage/>
    },
    {
        path: PATHS.TODO,
        element: <IdTodo/>
    },
]
