import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Deshboard from "../Pages/Deshboard"
import Products from "../Pages/Products/Products"
import Product from "../Pages/Products/Product"
import DeshboardLayout from "../Layout/DeshboardLayout"
import Profile from "../Pages/Profile"
import ProfileEdit from "../Pages/ProfileEdit"


const Routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/products',
                element:<Products/>,
                loader:()=>fetch(`https://dummyjson.com/products`)
            },
            {
                path:'/product/:id',
                element:<Product/>,
                loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/deshboard',
                element:<DeshboardLayout/>,
                children:[
                    {
                        path:'/deshboard',
                        element:<Deshboard/>
                    },
                    {
                        path:'/deshboard/profile',
                        element:<Profile/>
                    },
                    {
                        path:'/deshboard/profileEdit',
                        element:<ProfileEdit/>
                    },
                ]
            },
        ]
    }
])

export default Routes