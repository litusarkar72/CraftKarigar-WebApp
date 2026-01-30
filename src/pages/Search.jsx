import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Search() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    searchProducts(query).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [query]);

  return (
    <div className="container mt-5 pt-5">
      <h5>Search results for: <b>{query}</b></h5>

      {loading && <p>Searching…</p>}

      <div className="row mt-3">
        {products.length ? (
          products.map((p) => (
            <div key={p.id} className="col-md-3 mb-4">
              <ProductCard product={p} />
            </div>
          ))
        ) : (
          !loading && <p>No products found</p>
        )}
      </div>
    </div>
  );
}
