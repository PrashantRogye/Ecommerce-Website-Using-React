import { Outlet } from "react-router-dom";
// import Cart from "../pages/Cart/Cart";
// import Wishlist from "../pages/Wishlist/Wishlist";

import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./MainLayout.css";

const MainLayout = () => {
    return (
        <div className="app-layout">

            <AnnouncementBar />

            <Header />

            <Navbar />

            <main className="main-content">
                <Outlet />
            </main>

            <Footer />

        </div>
    );
};

export default MainLayout;