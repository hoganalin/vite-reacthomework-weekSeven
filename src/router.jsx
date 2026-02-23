// src/router.jsx

import { createHashRouter } from 'react-router-dom';
// 前台
import FrontendLayout from './layout/FrontendLayout';
import Home from './views/front/Home';
import Products from './views/front/Products';
import SingleProduct from './views/front/SingleProduct';
import Cart from './views/front/Cart';
import NotFound from './views/front/NotFound';
import Login from './views/Login';
import Checkout from './views/front/Checkout';
const router = createHashRouter([
  {
    path: '/',
    element: <FrontendLayout />,
    children: [
      {
        index: true, // 預設首頁
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'product/:id', // 動態參數
        element: <SingleProduct />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '*', // 404 頁面
    element: <NotFound />,
  },
]);
export default router;
