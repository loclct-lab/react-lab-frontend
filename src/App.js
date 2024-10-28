// import SignIn from "./components/signin/SignIn";
// import Register from "./components/register/Register";
// import Ordersuccessful from "./components/ordersuccessful/ordersuccessful";
// import WelcomeBack from "./components/signin/WelcomeBack";
// import Cart from "./components/cart/Cart";
// import OrderTracking from "./components/order_tracking/OrderTracking";
// import Search from "./components/search/Search";
// import Slide from "./components/Slide/Slide";
// import SignUp from "./components/register/SignUp";
// import Chat from "./components/chat/Chat";
// import Favorites from "./components/favorite/Favorites";
// import User from "./components/user/User";
import Categories from "./components/categories/Categories";
import Home from "./components/home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { Provider } from "react-redux";
import store from "./redux/store";
import PageNotFound from "./components/404PageNotFound";
import Products from "./components/search/Products";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function App() {
  const router = createBrowserRouter([
    { path: "/categories", element: <Categories /> },
    { path: "/product-detail/:id", element: <ProductDetail /> },
    // { path: "/cart", element: <Cart /> },
    { path: "/products", element: <Products /> },
    { path: "/", element: <Home /> },
    // {
    //     path: "ordersuccessful",
    //     element: <Ordersuccessful />,
    //   },
      // { path: "/ordertracking", element: <OrderTracking /> },
      // { path: "/welcomeback", element: <WelcomeBack /> },
      // { path: "/favorite", element: <Favorites /> },
      // { path: "/register", element: <Register /> },
      { path: "/*", element: <PageNotFound /> },
      // { path: "/signin", element: <SignIn /> },
      // { path: "/signup", element: <SignUp /> },
      // { path: "/search", element: <Search /> },
      // { path: "/user", element: <User /> },
      // { path: "/slide", element: <Slide /> },
      // { path: "/chat", element: <Chat /> },
    
  ]);
  return (
    <GoogleOAuthProvider clientId="742335434976-ba6q7645u3q3u4puaren62orp583a5ab.apps.googleusercontent.com
">
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
    </GoogleOAuthProvider>
  )
}

