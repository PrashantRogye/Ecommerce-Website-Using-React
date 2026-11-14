
import { Link } from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";

import { useShop } from "../../context/ShopContext";
import "./Orders.css";

const Orders = () => {
    const { orders } = useShop();

    const formatPrice = (price) =>
        `₹${price.toLocaleString("en-IN")}`;

    const formatDate = (date) =>
        new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });

    return (
        <main className="container section orders-page">
            <div className="orders-heading">
                <span>YOUR PURCHASES</span>
                <h1>My Orders</h1>
                <p>Track and manage your previous orders.</p>
            </div>

            {orders.length === 0 ? (
                <div className="empty-orders">
                    <FaBoxOpen />
                    <h2>No orders yet</h2>
                    <p>Your placed orders will appear here.</p>
                    <Link to="/products">Start Shopping</Link>
                </div>
            ) : (
                <div className="orders-list">
                    {orders.map((order) => (
                        <article className="order-card" key={order.id}>
                            <div className="order-card-header">
                                <div>
                                    <span>ORDER NUMBER</span>
                                    <strong>{order.id}</strong>
                                </div>

                                <div>
                                    <span>ORDER DATE</span>
                                    <strong>{formatDate(order.createdAt)}</strong>
                                </div>

                                <div>
                                    <span>TOTAL</span>
                                    <strong>{formatPrice(order.total)}</strong>
                                </div>

                                <span className="order-status">
                                    {order.status}
                                </span>
                            </div>

                            <div className="order-card-body">
                                <div className="order-product-preview">
                                    {order.items.slice(0, 3).map((item) => (
                                        <img
                                            key={item.id}
                                            src={item.image}
                                            alt={item.name}
                                            title={item.name}
                                        />
                                    ))}

                                    {order.items.length > 3 && (
                                        <span>+{order.items.length - 3} more</span>
                                    )}
                                </div>

                                <p>
                                    {order.items.length} product type(s) ·{" "}
                                    {order.items.reduce(
                                        (total, item) => total + item.quantity,
                                        0
                                    )}{" "}
                                    item(s)
                                </p>

                                <Link to={`/orders/${order.id}`}>
                                    View Details →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </main>
    );
};

export default Orders;
