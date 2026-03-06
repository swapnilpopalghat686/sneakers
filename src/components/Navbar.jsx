import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <h2 className="logo">Sneakers</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        {!token && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {token && (
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        )}

      </div>

    </nav>
  );
};

export default Navbar;