import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h3 className="text-center mt-5">Your cart is empty</h3>;
  }

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center border-bottom py-3"
        >
          <div>
            <h5>{item.name}</h5>
            <p>₹{item.price} × {item.quantity}</p>
          </div>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
