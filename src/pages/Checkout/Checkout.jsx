
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCreditCard, FaShoppingBag } from "react-icons/fa";

import { useShop } from "../../context/ShopContext";
import "./Checkout.css";

const Checkout = () => {
    const navigate = useNavigate();

    const { cart, cartSubtotal, shipping, cartTotal, placeOrder } = useShop();

    const [address, setAddress] = useState({
        fullName: "",
        email: "",
        phone: "",
        pincode: "",
        city: "",
        state: "",
        addressLine: "",
    });

    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [error, setError] = useState("");

    const formatPrice = (price) =>
        `₹${price.toLocaleString("en-IN")}`;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setAddress((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (cart.length === 0) {
            setError("Your cart is empty.");
            return;
        }

        try {
            const order = placeOrder({
                address,
                paymentMethod,
            });

            navigate(`/order-success/${order.id}`);
        } catch (err) {
            setError(err.message || "Unable to place your order.");
        }
    };

    if (cart.length === 0) {
        return (
            <main className="container section checkout-empty">
                <FaShoppingBag />
                <h2>Your cart is empty</h2>
                <p>Add products to your cart before checkout.</p>
                <Link to="/products">Explore Products</Link>
            </main>
        );
    }

    return (
        <main className="container section checkout-page">
            <div className="checkout-heading">
                <span>FINAL STEP</span>
                <h1>Checkout</h1>
                <p>Complete your details to place your order.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="checkout-layout">
                    <div className="checkout-main">

                        {/* Delivery Address */}
                        <section className="checkout-card">
                            <div className="checkout-section-heading">
                                <FaMapMarkerAlt />
                                <h2>Delivery Address</h2>
                            </div>

                            <div className="checkout-form-grid">
                                <div className="checkout-field">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        name="fullName"
                                        value={address.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        autoComplete="name"
                                        required
                                    />
                                </div>

                                <div className="checkout-field">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={address.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        autoComplete="email"
                                        required
                                    />
                                </div>

                                <div className="checkout-field">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        value={address.phone}
                                        onChange={handleChange}
                                        placeholder="10-digit mobile number"
                                        pattern="[6-9][0-9]{9}"
                                        maxLength={10}
                                        autoComplete="tel"
                                        required
                                    />
                                </div>

                                <div className="checkout-field">
                                    <label htmlFor="pincode">PIN Code</label>
                                    <input
                                        id="pincode"
                                        type="text"
                                        name="pincode"
                                        value={address.pincode}
                                        onChange={handleChange}
                                        placeholder="6-digit PIN code"
                                        pattern="[0-9]{6}"
                                        maxLength={6}
                                        autoComplete="postal-code"
                                        required
                                    />
                                </div>

                                <div className="checkout-field">
                                    <label htmlFor="city">City</label>
                                    <input
                                        id="city"
                                        type="text"
                                        name="city"
                                        value={address.city}
                                        onChange={handleChange}
                                        placeholder="Enter city"
                                        autoComplete="address-level2"
                                        required
                                    />
                                </div>

                                <div className="checkout-field">
                                    <label htmlFor="state">State</label>
                                    <input
                                        id="state"
                                        type="text"
                                        name="state"
                                        value={address.state}
                                        onChange={handleChange}
                                        placeholder="Enter state"
                                        autoComplete="address-level1"
                                        required
                                    />
                                </div>

                                <div className="checkout-field full-width">
                                    <label htmlFor="addressLine">Full Address</label>
                                    <textarea
                                        id="addressLine"
                                        name="addressLine"
                                        value={address.addressLine}
                                        onChange={handleChange}
                                        placeholder="House number, street, area, landmark"
                                        rows="3"
                                        autoComplete="street-address"
                                        required
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Payment Method */}
                        <section className="checkout-card">
                            <div className="checkout-section-heading">
                                <FaCreditCard />
                                <h2>Payment Method</h2>
                            </div>

                            <div className="payment-options">
                                <label className={`payment-option ${paymentMethod === "COD" ? "selected" : ""}`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="COD"
                                        checked={paymentMethod === "COD"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>
                                        <strong>Cash on Delivery</strong>
                                        <small>Pay when your order arrives</small>
                                    </span>
                                </label>

                                <label className={`payment-option ${paymentMethod === "UPI" ? "selected" : ""}`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="UPI"
                                        checked={paymentMethod === "UPI"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>
                                        <strong>UPI</strong>
                                        <small>Demo payment selection only</small>
                                    </span>
                                </label>

                                <label className={`payment-option ${paymentMethod === "CARD" ? "selected" : ""}`}>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="CARD"
                                        checked={paymentMethod === "CARD"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>
                                        <strong>Credit / Debit Card</strong>
                                        <small>Demo payment selection only</small>
                                    </span>
                                </label>
                            </div>

                            <p className="payment-disclaimer">
                                This is a frontend demonstration. No actual payment
                                will be collected.
                            </p>
                        </section>

                    </div>

                    {/* Order Summary */}
                    <aside className="checkout-summary">
                        <h2>Order Summary</h2>

                        <div className="checkout-order-items">
                            {cart.map((item) => (
                                <div className="checkout-order-item" key={item.id}>
                                    <div className="checkout-item-image">
                                        <img src={item.image} alt={item.name} />
                                        <span>{item.quantity}</span>
                                    </div>

                                    <div>
                                        <strong>{item.name}</strong>
                                        <small>{item.category}</small>
                                    </div>

                                    <strong>
                                        {formatPrice(item.price * item.quantity)}
                                    </strong>
                                </div>
                            ))}
                        </div>

                        <div className="checkout-total-row">
                            <span>Subtotal</span>
                            <strong>{formatPrice(cartSubtotal)}</strong>
                        </div>

                        <div className="checkout-total-row">
                            <span>Shipping</span>
                            <strong>
                                {shipping === 0 ? "FREE" : formatPrice(shipping)}
                            </strong>
                        </div>

                        <div className="checkout-grand-total">
                            <span>Total</span>
                            <strong>{formatPrice(cartTotal)}</strong>
                        </div>

                        {error && <p className="checkout-error">{error}</p>}

                        <button type="submit" className="place-order-btn">
                            Place Order
                        </button>

                        <p className="checkout-security">
                            Your order details are saved locally in this demo.
                        </p>
                    </aside>
                </div>
            </form>
        </main>
    );
};

export default Checkout;
