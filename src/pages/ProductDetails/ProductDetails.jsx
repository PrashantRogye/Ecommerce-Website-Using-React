
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaShoppingBag, FaArrowLeft } from "react-icons/fa";
import { useShop } from "../../context/ShopContext";

import products from "../../data/products";
import "./ProductDetails.css";

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useShop();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    const [selectedImage, setSelectedImage] = useState(
        product?.image || ""
    );

    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="container section product-not-found">
                <h2>Product not found</h2>
                <p>The product you're looking for doesn't exist.</p>
                <Link to="/products">Back to Products</Link>
            </div>
        );
    }

    const discount = product.oldPrice
        ? Math.round(
            ((product.oldPrice - product.price) / product.oldPrice) * 100
        )
        : 0;

    const formatPrice = (price) =>
        `₹${price.toLocaleString("en-IN")}`;

    // const handleAddToCart = () => {
    //     alert(`${quantity} ${product.name} added to cart!`);
    // };



    const handleAddToCart = () => {
        addToCart(product, quantity);
        alert(`${quantity} ${product.name} added to cart!`);
    };

    const handleBuyNow = () => {
        alert("Checkout functionality will be added in a future phase.");
    };



    return (
        <main className="product-details-page container section">
            <Link to="/products" className="back-to-products">
                <FaArrowLeft /> Back to Products
            </Link>

            <div className="product-details-layout">
                <div className="product-gallery">
                    <div className="main-product-image">
                        <img src={selectedImage} alt={product.name} />
                    </div>

                    <div className="product-thumbnails">
                        <button
                            type="button"
                            className="thumbnail active"
                            onClick={() => setSelectedImage(product.image)}
                        >
                            <img src={product.image} alt={product.name} />
                        </button>
                    </div>
                </div>

                <div className="product-details-info">
                    <span className="detail-category">{product.category}</span>

                    <h1>{product.name}</h1>

                    <div className="detail-rating">
                        <FaStar />
                        <strong>{product.rating}</strong>
                        <span>({product.reviews} reviews)</span>
                    </div>

                    <div className="detail-price">
                        <strong>{formatPrice(product.price)}</strong>

                        {product.oldPrice > product.price && (
                            <>
                                <del>{formatPrice(product.oldPrice)}</del>
                                <span>{discount}% OFF</span>
                            </>
                        )}
                    </div>

                    <p className="detail-description">
                        Experience quality and performance with this {product.brand}{" "}
                        {product.category.toLowerCase()} product. A great choice for
                        your everyday technology needs.
                    </p>

                    <div className="detail-meta">
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Availability:</strong> In Stock</p>
                    </div>

                    <div className="quantity-control">
                        <span>Quantity:</span>

                        <div>
                            <button
                                type="button"
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                            >
                                −
                            </button>

                            <strong>{quantity}</strong>

                            <button
                                type="button"
                                onClick={() => setQuantity((q) => q + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="detail-actions">
                        <button
                            type="button"
                            className="add-cart-btn"
                            onClick={handleAddToCart}
                        >
                            <FaShoppingBag /> Add to Cart
                        </button>

                        <button
                            type="button"
                            className="buy-now-btn"
                            onClick={handleBuyNow}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetails;
