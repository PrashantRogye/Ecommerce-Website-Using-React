import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ isMobile = false, onNavigate }) => {
    const links = [
        { name: "Home", path: "/" },
        { name: "All Products", path: "/products" },
        { name: "Categories", path: "/categories" },
        { name: "New Arrivals", path: "/products?sort=newest" },
        { name: "Best Sellers", path: "/products?sort=popular" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={`navbar ${isMobile ? "navbar-mobile" : ""}`}>
            <div className="container navbar-container">

                {links.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        end={link.path === "/"}
                        onClick={onNavigate}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}

            </div>
        </nav>
    );
};

export default Navbar;