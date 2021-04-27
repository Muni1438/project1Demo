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
        <div className="link_div">
          {" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Home</h3>
          </Link>
        </div>
        <div className="link_div">
          {" "}
          <Link to="login" style={{ textDecoration: "none" }}>
            <h3>Login</h3>
          </Link>
        </div>
        <div className="link_div">
          <Link to="logout" style={{ textDecoration: "none" }}>
            <h3>Logout</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
