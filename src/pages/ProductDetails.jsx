import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(id).then((data) => {
      if (data && data.id) {
        setProduct(data);
      } else {
        setProduct(null);
      }
    });
  }, [id]);

  if (!product) {
    return <h3 className="text-center mt-5">Product not found</h3>;
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="row g-4">

        {/* Image */}
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Details */}
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <h4 className="text-success mb-3">₹{product.price}</h4>

          <p className="text-muted">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="d-flex align-items-center mb-3">
            <label className="me-3">Quantity:</label>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="form-control w-25"
            />
          </div>

          {/* Add to Cart */}
          <button
            className="btn btn-dark btn-lg"
            onClick={() => addToCart(product, qty)}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}
 