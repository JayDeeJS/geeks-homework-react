import React from "react"
import { createBrowserRouter, Link } from "react-router-dom"
import AboutPage from "../components/pages/AboutPage"
import ContactsPage from "../components/pages/Contacts"
import MainPage from "../components/pages/MainPage"

function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000)
    }).then(() => promise)
}

const IdTodo = React.lazy(() => delayForDemo(import('../components/pages/IdTodo')))

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

export const routesV6 = createBrowserRouter(
    [
        {
            path: "/",
            element: (
              <div>
                <h1>Hello World</h1>
                <Link to="/about">About Us</Link>
              </div>
            ),
            children: [
                {
                    
                }
            ]
        },
    ]
)