import { FaTrash, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "./CartDrawer.css";

export default function CartDrawer({ open, onClose }) {
  const { cart, increaseQty, decreaseQty, removeItem, totalAmount } = useCart();

  return (
    <div className={`cart-drawer ${open ? "open" : ""}`}>
      <div className="cart-header">
        <h4>Your cart</h4>
        <FaTimes onClick={onClose} className="close-icon" />
      </div>

      <div className="cart-body">
        {cart.length === 0 && <p>Your cart is empty</p>}

        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h6>{item.name}</h6>
              <p>Rs. {item.price}</p>

              <div className="qty-box">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>

            <div className="cart-actions">
              <p>Rs. {item.price * item.quantity}</p>
              <FaTrash onClick={() => removeItem(item.id)} />
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="total">
          <span>Estimated total</span>
          <span>Rs. {totalAmount}</span>
        </div>

        <button className="checkout-btn">Check out</button>
      </div>
    </div>
  );
}
