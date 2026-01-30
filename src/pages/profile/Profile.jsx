import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  FaBoxOpen,
  FaMapMarkerAlt,
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Profile.css";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container py-4 profile-page">

      {/* ===== USER HEADER ===== */}
      <div className="profile-header shadow-sm rounded-3 mb-4">
        <h4 className="mb-1">Hello, {user.name}</h4>
        <p className="text-muted mb-0">{user.email}</p>
      </div>

      {/* ===== QUICK ACTIONS ===== */}
      <div className="row g-3">

        <div className="col-12 col-md-4">
          <div className="profile-tile" onClick={() => navigate("/orders")}>
            <FaBoxOpen />
            <span>My Orders</span>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="profile-tile" onClick={() => navigate("/address")}>
            <FaMapMarkerAlt />
            <span>My Addresses</span>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="profile-tile" onClick={() => navigate("/security")}>
            <FaUserShield />
            <span>Login & Security</span>
          </div>
        </div>

      </div>

      {/* ===== LOGOUT ===== */}
      <div className="logout-section mt-4">
        <button className="btn btn-outline-danger w-100" onClick={handleLogout}>
          <FaSignOutAlt className="me-2" />
          Logout
        </button>
      </div>

    </div>
  );
}
