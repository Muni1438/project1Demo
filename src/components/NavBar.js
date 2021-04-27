import React from "react";
import "./Demo.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>Home</h3>
        </Link>

        <Link to="login" style={{ textDecoration: "none" }}>
          <h3>Login</h3>
        </Link>
        <Link to="logout" style={{ textDecoration: "none" }}>
          <h3>Logout</h3>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
