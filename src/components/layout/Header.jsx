import { Link } from "react-router-dom";
import { useShop } from "../../context/ShopContext";
import { FaBoxOpen } from "react-icons/fa";

import {
    FaUser,
    FaHeart,
    FaShoppingBag,
    FaBars,
    FaTimes,
} from "react-icons/fa";

import { useState } from "react";

import SearchBar from "./SearchBar";

import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    const { cartCount, wishlist } = useShop();

    return (
        <header className="header">
            <div className="container header-container">

                {/* Logo */}
                <Link to="/" className="logo" onClick={closeMenu}>
                    Electro<span>Hub.</span>
                </Link>

                {/* Search */}
                <div className="header-search">
                    <SearchBar />
                </div>

                {/* Header Actions */}
                <div className="header-actions">

                    <Link to="/account" className="header-action">
                        <FaUser />
                        <span>Account</span>
                    </Link>

                    {/* <Link to="/wishlist" className="header-action">
                        <FaHeart />
                        <span>Wishlist</span>
                    </Link> */}

                    <Link to="/wishlist" className="header-action">
                        <span className="header-icon">
                            <FaHeart />
                            {wishlist.length > 0 && (
                                <span className="header-count">{wishlist.length}</span>
                            )}
                        </span>
                        <span>Wishlist</span>
                    </Link>

                    {/* <Link to="/cart" className="header-action cart-action">
                        <FaShoppingBag />
                        <span>Cart</span>
                        <small className="cart-count">0</small>
                    </Link> */}

                    <Link to="/cart" className="header-action">
                        <span className="header-icon">
                            <FaShoppingBag />
                            {cartCount > 0 && (
                                <span className="header-count">{cartCount}</span>
                            )}
                        </span>
                        <span>Cart</span>
                    </Link>

                    <Link to="/orders" className="header-action">
                        <FaBoxOpen />
                        <span>My Orders</span>
                    </Link>

                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Navigation */}
                <div className={`mobile-navigation ${menuOpen ? "open" : ""}`}>
                    <SearchBar />

                    <Link to="/account" onClick={closeMenu}>
                        <FaUser /> My Account
                    </Link>

                    <Link to="/wishlist" onClick={closeMenu}>
                        <FaHeart /> My Wishlist
                    </Link>

                    <Link to="/cart" onClick={closeMenu}>
                        <FaShoppingBag /> Shopping Cart
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Header;