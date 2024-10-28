import SignIn from "./components/signin/SignIn";
import Register from "./components/register/Register";
import Categories from "./components/categories/Categories";
import Home from "./components/home/Home";
import Ordersuccessful from "./components/ordersuccessful/ordersuccessful";
import WelcomeBack from "./components/signin/WelcomeBack";
import Search from "./components/search/Search";
import Cart from "./components/cart/Cart";
import OrderTracking from "./components/order_tracking/OrderTracking";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { Provider } from "react-redux";
import store from "./redux/store";
import Favorites from "./components/favorite/Favorites";
import User from "./components/user/User";
import PageNotFound from "./components/404PageNotFound";
import Products from "./components/search/Products";
import Slide from "./components/Slide/Slide";
import SignUp from "./components/register/SignUp";
import Chat from "./components/chat/Chat";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function App() {
  const router = createBrowserRouter([
    { path: "/categories", element: <Categories /> },
    { path: "/product-detail/:id", element: <ProductDetail /> },
    { path: "/cart", element: <Cart /> },
    { path: "/products", element: <Products /> },
    { path: "/", element: <Home /> },
    {
        path: "ordersuccessful",
        element: <Ordersuccessful />,
      },
      { path: "/ordertracking", element: <OrderTracking /> },
      { path: "/welcomeback", element: <WelcomeBack /> },
      { path: "/favorite", element: <Favorites /> },
      { path: "/register", element: <Register /> },
      // { path: "/*", element: <PageNotFound /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/search", element: <Search /> },
      { path: "/user", element: <User /> },
      { path: "/slide", element: <Slide /> },
      { path: "/chat", element: <Chat /> },
    
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

{/* <Provider store={store}>
  <Router>
    <Routes>
      <Route path="/ordersuccessful" element={<Ordersuccessful />} />
      <Route path="/productdetails" element={<ProductDetail />} />
      <Route path="/ordertracking" element={<OrderTracking />} />
      <Route path="/welcomeback" element={<WelcomeBack />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/user" element={<User />} />
      <Route path="/slide" element={<Slide />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
</Provider>; */}
