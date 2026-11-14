
import { FaTrash } from "react-icons/fa";
import { useShop } from "../../context/ShopContext";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const { updateQuantity, removeFromCart } = useShop();

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="cart-item-info">
        <span>{product.category}</span>
        <h3>{product.name}</h3>
        <strong>
          ₹{product.price.toLocaleString("en-IN")}
        </strong>

        <div className="cart-item-actions">
          <div className="cart-quantity">
            <button
              type="button"
              onClick={() =>
                updateQuantity(product.id, product.quantity - 1)
              }
              disabled={product.quantity <= 1}
            >
              −
            </button>

            <span>{product.quantity}</span>

            <button
              type="button"
              onClick={() =>
                updateQuantity(product.id, product.quantity + 1)
              }
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="remove-cart-item"
            onClick={() => removeFromCart(product.id)}
          >
            <FaTrash /> Remove
          </button>
        </div>
      </div>

      <div className="cart-item-total">
        ₹{(product.price * product.quantity).toLocaleString("en-IN")}
      </div>
    </div>
  );
};

export default CartItem;
