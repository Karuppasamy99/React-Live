import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Accordian from "./components/Accordian";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
//import Profile from './components/Profile';
import ChildToParent from "./components/ChildToParent";

const Restaurants = lazy(()=> import('./components/Restaurants'))

const AppLayout = () => {
    return (
        <div className="p-2">
            <Header />
            <Outlet />
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                    
                },
                {
                    path: "/about",
                    element: <About />,
                    // children: [
                    //     {
                    //         path: 'profile',
                    //         element: <Profile />
                    //     }
                    // ]
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/restaurant/:id",
                    element: <RestaurantInfo />
                },
                {
                    path: "/restaurant",
                    element: <Suspense>
                        <Restaurants />
                    </Suspense>
                },
                {
                    path: '/accordian',
                    element: <Accordian />
                }
            ]
        },
        {   path: '/color',
            element: <ChildToParent />
        }
        

    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)