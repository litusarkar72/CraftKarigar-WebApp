import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import CartDrawer from "./CartDrawer";
import "./Navbar.css";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useContext(AuthContext);

  const [openCart, setOpenCart] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const navigate = useNavigate();

  const cartCount = cart.reduce((t, i) => t + i.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  const handleLogout = () => {
    logout();
    setAccountOpen(false);
    setMobileOpen(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg perfume-navbar">
        <div className="container-fluid px-3 px-lg-5">

          {/* ================= MOBILE HEADER ================= */}
          <div className="d-flex d-lg-none align-items-center w-100 justify-content-between">

            <button
              className="btn icon-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>

            <Link className="navbar-brand mx-auto" to="/">
              <img src="/src/assets/karigar1.png" height="36" />
            </Link>

            <div className="d-flex gap-3">
              <FaSearch className="icon-btn" />
              <button
                className="btn position-relative p-0 icon-btn"
                onClick={() => setOpenCart(true)}
              >
                <FaShoppingCart />
                {cartCount > 0 && (
                  <span className="badge bg-danger cart-badge">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* ================= DESKTOP NAV ================= */}
          <div className="collapse navbar-collapse d-none d-lg-flex">

            <Link className="navbar-brand" to="/">
              <img src="/src/assets/karigar1.png" height="45" />
            </Link>

            <ul className="navbar-nav mx-auto align-items-center">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              <form className="d-flex" onSubmit={handleSearch}>
                <input
                  className="form-control form-control-sm"
                  placeholder="Search…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-dark btn-sm ms-2">
                  <FaSearch />
                </button>
              </form>

              <button
                className="btn position-relative icon-btn"
                onClick={() => setOpenCart(true)}
              >
                <FaShoppingCart />
                {cartCount > 0 && (
                  <span className="badge bg-danger cart-badge">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* ===== AUTH SECTION ===== */}
              {!user ? (
                <Link to="/login" className="btn btn-outline-dark btn-sm">
                  <FaUser /> Login
                </Link>
              ) : (
                <div className="position-relative">
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => setAccountOpen(!accountOpen)}
                  >
                    <FaUser /> {user.name}
                  </button>

                  {accountOpen && (
                    <div className="account-dropdown">
                      <Link to="/profile" onClick={() => setAccountOpen(false)}>
                        My Profile
                      </Link>
                      <Link to="/orders" onClick={() => setAccountOpen(false)}>
                        My Orders
                      </Link>
                      <button className="text-danger" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= MOBILE DRAWER ================= */}
        {mobileOpen && (
          <div className="mobile-menu d-lg-none">
            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

            <div className="mobile-login mt-3">
              {!user ? (
                <Link
                  to="/login"
                  className="btn w-100 text-start"
                  onClick={() => setMobileOpen(false)}
                >
                  <FaUser /> Login
                </Link>
              ) : (
                <>
                  <div className="fw-bold mb-2">{user.name}</div>

                  <Link to="/profile" onClick={() => setMobileOpen(false)}>
                    My Profile
                  </Link>

                  <Link to="/orders" onClick={() => setMobileOpen(false)}>
                    My Orders
                  </Link>

                  <button
                    className="btn text-danger text-start p-0 mt-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}
