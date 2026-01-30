import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
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
      await login(form.email, form.password);
      navigate("/");
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="login-wrapper shadow-lg rounded-4 overflow-hidden row">

        {/* LEFT */}
        <div className="col-12 col-md-6 bg-white p-5">
          <h2 className="mb-4">Login</h2>

          {error && <div className="alert alert-danger py-2">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="icon-input mb-3">
              <FaEnvelope />
              <input
                type="email"
                name="email"
                placeholder="Enter"
                required
                onChange={handleChange}
              />
            </div>

            <div className="icon-input mb-2">
              <FaLock />
              <input
                type="password"
                name="password"
                placeholder="Enter"
                required
                onChange={handleChange}
              />
            </div>

            <div className="text-start mb-3">
              <Link to="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <button className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="signup-text mt-4">
            Don’t have an account?
            <Link to="/signup"> Signup now</Link>
          </p>
        </div>

        {/* RIGHT */}
        <div className="col-md-6 d-none d-md-flex login-image">
          <div className="overlay">
            <h3>
              Every new<br />
              friend is a<br />
              new adventure.
            </h3>
            <p>let’s get connected</p>
          </div>
        </div>

      </div>
    </div>
  );
}
