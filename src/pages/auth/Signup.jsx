import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { registerUser } from "../../services/api";
import "./Login.css"; // 🔥 reuse SAME CSS as login

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerUser(form);
      navigate("/login");
    } catch {
      setError("Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="login-wrapper shadow-lg rounded-4 overflow-hidden row">

        {/* LEFT */}
        <div className="col-12 col-md-6 bg-white p-5">
          <h2 className="mb-4">Signup</h2>

          {error && <div className="alert alert-danger py-2">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="icon-input mb-3">
              <FaUser />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                onChange={handleChange}
              />
            </div>

            <div className="icon-input mb-3">
              <FaEnvelope />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
              />
            </div>

            <div className="icon-input mb-3">
              <FaLock />
              <input
                type="password"
                name="password"
                placeholder="Create password"
                required
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Creating account..." : "Signup"}
            </button>
          </form>

          <p className="signup-text mt-4">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>

        {/* RIGHT */}
        <div className="col-md-6 d-none d-md-flex login-image">
          <div className="overlay">
            <h3>
              Start your<br />
              journey<br />
              with us
            </h3>
            <p>Create your account today</p>
          </div>
        </div>

      </div>
    </div>
  );
}
