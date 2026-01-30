import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function ProductCard({ product }) {
    const { addToCart } = useCart();

  return (
    <div className="col">
      <div className="card h-100 shadow-sm">

        {/* Clickable Image */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
            style={{ height: "220px", objectFit: "cover", cursor: "pointer" }}
          />
        </Link>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="text-muted">₹{product.price}</p>

          <button
  className="btn btn-dark mt-auto"
  onClick={() => addToCart(product, 1)}
>
  Add to Cart
</button>

        </div>

      </div>
    </div>
  );
}
