import {createBrowserRouter} from 'react-router'
import HomePage from './pages/home'
import Layout from './layout'
import ShopPage from './pages/shop'

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
       }]
    }
])