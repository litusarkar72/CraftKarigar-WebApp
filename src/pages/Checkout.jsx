// import { useCart } from "../context/CartContext";
// import { createOrder } from "../services/api";
// import { useNavigate } from "react-router-dom";

// const Checkout = () => {
//   const { cart, clearCart } = useCart();
//   const navigate = useNavigate();

//   const handleOrder = async () => {
//     await createOrder({
//       items: cart,
//       date: new Date(),
//     });
//     clearCart();
//     navigate("/success");
//   };

//   return <button onClick={handleOrder}>Place Order</button>;
// };

// export default Checkout;
