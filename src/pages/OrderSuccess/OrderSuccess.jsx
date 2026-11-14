
import { Link, useParams } from "react-router-dom";
import { FaCheckCircle, FaBoxOpen } from "react-icons/fa";

import { useShop } from "../../context/ShopContext";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const { orderId } = useParams();
  const { orders } = useShop();

  const order = orders.find((item) => item.id === orderId);

  if (!order) {
    return (
      <main className="container section order-success-page">
        <h2>Order not found</h2>
        <p>We couldn't find this order in your saved order history.</p>
        <Link to="/orders">View My Orders</Link>
      </main>
    );
  }

  return (
    <main className="container section order-success-page">
      <div className="success-card">
        <FaCheckCircle className="success-icon" />

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you, {order.address.fullName}. Your order has been
          confirmed.
        </p>

        <div className="success-order-info">
          <div>
            <span>Order Number</span>
            <strong>{order.id}</strong>
          </div>

          <div>
            <span>Order Total</span>
            <strong>
              ₹{order.total.toLocaleString("en-IN")}
            </strong>
          </div>

          <div>
            <span>Payment Method</span>
            <strong>{order.paymentMethod}</strong>
          </div>

          <div>
            <span>Order Status</span>
            <strong>{order.status}</strong>
          </div>
        </div>

        <div className="success-actions">
          <Link to={`/orders/${order.id}`}>
            <FaBoxOpen /> View Order Details
          </Link>

          <Link to="/products" className="secondary-success-link">
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
};

export default OrderSuccess;
