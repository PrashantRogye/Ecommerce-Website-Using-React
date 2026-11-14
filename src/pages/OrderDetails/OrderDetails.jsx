
import { Link, useParams } from "react-router-dom";
import { useShop } from "../../context/ShopContext";
import "./OrderDetails.css";

const OrderDetails = () => {
    const { orderId } = useParams();
    const { orders } = useShop();

    const order = orders.find((item) => item.id === orderId);

    const formatPrice = (price) =>
        `₹${price.toLocaleString("en-IN")}`;

    if (!order) {
        return (
            <main className="container section">
                <h2>Order not found</h2>
                <Link to="/orders">Back to My Orders</Link>
            </main>
        );
    }

    return (
        <main className="container section order-details-page">
            <Link to="/orders" className="order-back-link">
                ← Back to My Orders
            </Link>

            <div className="order-details-heading">
                <div>
                    <span>ORDER DETAILS</span>
                    <h1>{order.id}</h1>
                </div>

                <strong className="order-detail-status">
                    {order.status}
                </strong>
            </div>

            <div className="order-details-layout">
                <section className="order-details-main">
                    <div className="order-detail-card">
                        <h2>Products Ordered</h2>

                        {order.items.map((item) => (
                            <div className="ordered-product" key={item.id}>
                                <img src={item.image} alt={item.name} />

                                <div>
                                    <strong>{item.name}</strong>
                                    <span>{item.category}</span>
                                    <small>Quantity: {item.quantity}</small>
                                </div>

                                <strong>
                                    {formatPrice(item.price * item.quantity)}
                                </strong>
                            </div>
                        ))}
                    </div>

                    <div className="order-detail-card">
                        <h2>Delivery Address</h2>

                        <div className="order-address">
                            <strong>{order.address.fullName}</strong>
                            <p>{order.address.addressLine}</p>
                            <p>
                                {order.address.city}, {order.address.state} -{" "}
                                {order.address.pincode}
                            </p>
                            <p>Phone: {order.address.phone}</p>
                            <p>Email: {order.address.email}</p>
                        </div>
                    </div>
                </section>

                <aside className="order-detail-card order-price-summary">
                    <h2>Payment Summary</h2>

                    <div>
                        <span>Subtotal</span>
                        <strong>{formatPrice(order.subtotal)}</strong>
                    </div>

                    <div>
                        <span>Shipping</span>
                        <strong>
                            {order.shipping === 0
                                ? "FREE"
                                : formatPrice(order.shipping)}
                        </strong>
                    </div>

                    <div className="order-final-total">
                        <span>Total</span>
                        <strong>{formatPrice(order.total)}</strong>
                    </div>

                    <p>
                        Payment Method: <strong>{order.paymentMethod}</strong>
                    </p>

                    <p>
                        Order Date:{" "}
                        <strong>
                            {new Date(order.createdAt).toLocaleDateString("en-IN")}
                        </strong>
                    </p>
                </aside>
            </div>
        </main>
    );
};

export default OrderDetails;
