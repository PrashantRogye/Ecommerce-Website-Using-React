
import { Link } from "react-router-dom";
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";

import { useShop } from "../../context/ShopContext";
import CartItem from "../../components/cart/CartItem";
import "./Cart.css";

const Cart = () => {
    const {
        cart,
        cartCount,
        cartSubtotal,
        shipping,
        cartTotal,
    } = useShop();

    const formatPrice = (price) =>
        `₹${price.toLocaleString("en-IN")}`;

    if (cart.length === 0) {
        return (
            <main className="container section cart-page">
                <div className="empty-cart">
                    <FaShoppingBag />
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/products" className="continue-shopping">
                        Start Shopping <FaArrowRight />
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="container section cart-page">
            <div className="cart-heading">
                <div>
                    <span>YOUR SHOPPING BAG</span>
                    <h1>Shopping Cart</h1>
                </div>
                <p>{cartCount} items</p>
            </div>

            <div className="cart-layout">
                <section className="cart-products">
                    {cart.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}

                    <Link to="/products" className="continue-link">
                        ← Continue Shopping
                    </Link>
                </section>

                <aside className="cart-summary">
                    <h2>Order Summary</h2>

                    <div className="summary-row">
                        <span>Subtotal ({cartCount} items)</span>
                        <strong>{formatPrice(cartSubtotal)}</strong>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <strong>
                            {shipping === 0 ? "FREE" : formatPrice(shipping)}
                        </strong>
                    </div>

                    {shipping > 0 && (
                        <p className="shipping-note">
                            Add ₹{(999 - cartSubtotal).toLocaleString("en-IN")} more
                            for free shipping.
                        </p>
                    )}

                    <div className="summary-total">
                        <span>Total</span>
                        <strong>{formatPrice(cartTotal)}</strong>
                    </div>

                    {/* <button
                        type="button"
                        className="checkout-btn"
                        onClick={() =>
                            alert("Checkout will be implemented in a future phase.")
                        }
                    >
                        Proceed to Checkout <FaArrowRight />
                    </button> */}

                    <Link to="/checkout" className="checkout-btn">
                        Proceed to Checkout <FaArrowRight />
                    </Link>

                    <p className="secure-note">
                        Secure checkout experience
                    </p>
                </aside>
            </div>
        </main>
    );
};

export default Cart;
