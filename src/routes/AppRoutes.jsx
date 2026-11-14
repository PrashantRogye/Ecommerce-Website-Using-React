
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Search from "../pages/Search/Search";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Checkout from "../pages/Checkout/Checkout";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import Orders from "../pages/Orders/Orders";
import OrderDetails from "../pages/OrderDetails/OrderDetails";

const ComingSoon = () => (
    <section className="container section">
        <h2>Page Coming Soon</h2>
        <p>We're currently building this section.</p>
    </section>
);

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/search" element={<Search />} />

                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />

                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success/:orderId" element={<OrderSuccess />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/orders/:orderId" element={<OrderDetails />} />

                <Route path="*" element={<ComingSoon />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
