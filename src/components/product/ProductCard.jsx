import { Link } from "react-router-dom";
import { useShop } from "../../context/ShopContext";
import { FaShoppingCart } from "react-icons/fa";

import {
    FaHeart,
    FaStar,
    FaArrowRight,
} from "react-icons/fa";

import "./ProductCard.css";



const ProductCard = ({ product }) => {
    const formatPrice = (price) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(price);

    const discount = Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
    );

    const {
        addToCart,
        toggleWishlist,
        isInWishlist,
    } = useShop();

    const isWishlisted = isInWishlist(product.id);

    return (
        <div className="product-card">

            <div className="product-image-wrapper">

                <Link to={`/products/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        loading="lazy"
                    />
                </Link>

                {product.badge && (
                    <span className="product-badge">
                        {product.badge}
                    </span>
                )}

                <span className="product-discount">
                    -{discount}%
                </span>

                <button
                    type="button"
                    className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
                    onClick={() => toggleWishlist(product)}
                    aria-label={
                        isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                    }
                >
                    <FaHeart />
                </button>

                <Link
                    to={`/products/${product.id}`}
                    className="quick-view"
                >
                    View Product <FaArrowRight />
                </Link>

            </div>

            <div className="product-info">

                <span className="product-category">
                    {product.category}
                </span>

                <Link to={`/products/${product.id}`}>
                    <h3 className="product-name">
                        {product.name}
                    </h3>
                </Link>

                <div className="product-rating">
                    <FaStar />
                    <span>{product.rating}</span>
                    <span className="review-count">
                        ({product.reviews} Reviews)
                    </span>
                </div>

                <div className="product-price">

                    <span className="current-price">
                        {formatPrice(product.price)}
                    </span>

                    <span className="old-price">
                        {formatPrice(product.oldPrice)}
                    </span>

                </div>

                <button
                    type="button"
                    className="card-add-cart"
                    onClick={() => addToCart(product)}
                >
                    <FaShoppingCart />
                    Add to Cart
                </button>

            </div>



        </div>
    );
};

export default ProductCard;