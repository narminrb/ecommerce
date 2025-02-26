import {createBrowserRouter} from 'react-router'
import HomePage from './pages/home'
import Layout from './layout'
import ShopPage from './pages/shop'
import CheckOut from './pages/checkout'
import ShopDetail from './pages/shopDetail'

export const Router = createBrowserRouter([
    {
        path: '/',
        exact: true,
        element:<Layout/>,
        children: [{
        path: '/',
        element: <HomePage/>,
       },
       {
        path: '/shop',
        element: <ShopPage/>,
       },
       {
        path:'/checkout',
        element:<CheckOut/>
       },
       {
        path: 'shop/:id',
        element:<ShopDetail/>
 
       }
    ]
    }
])