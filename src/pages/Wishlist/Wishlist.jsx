
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";

import { useShop } from "../../context/ShopContext";
import "./Wishlist.css";

const Wishlist = () => {
    const {
        wishlist,
        toggleWishlist,
        addToCart,
    } = useShop();

    const formatPrice = (price) =>
        `₹${price.toLocaleString("en-IN")}`;

    return (
        <main className="container section wishlist-page">
            <div className="wishlist-heading">
                <span>YOUR FAVOURITES</span>
                <h1>My Wishlist</h1>
                <p>{wishlist.length} saved products</p>
            </div>

            {wishlist.length === 0 ? (
                <div className="empty-wishlist">
                    <FaHeart />
                    <h2>Your wishlist is empty</h2>
                    <p>Save your favourite products to find them easily later.</p>
                    <Link to="/products">Explore Products</Link>
                </div>
            ) : (
                <div className="wishlist-grid">
                    {wishlist.map((product) => (
                        <article className="wishlist-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <div className="wishlist-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                            </Link>

                            <div className="wishlist-info">
                                <span>{product.category}</span>
                                <h3>{product.name}</h3>
                                <strong>{formatPrice(product.price)}</strong>

                                <div className="wishlist-actions">
                                    <button
                                        type="button"
                                        onClick={() => addToCart(product)}
                                    >
                                        <FaShoppingCart /> Add to Cart
                                    </button>

                                    <button
                                        type="button"
                                        className="wishlist-remove"
                                        onClick={() => toggleWishlist(product)}
                                        aria-label="Remove from wishlist"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </main>
    );
};

export default Wishlist;
