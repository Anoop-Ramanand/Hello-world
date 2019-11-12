import React from "react";
import "./header.css";

const Header = () => {
    return(
        <div className="container">
          <h2 className="siteName">Shopping Site</h2>
          <nav className="homfav">
              <a href="/"  className="homfav1">Home</a>
              <a href="/cart" className="homfav2">Cart</a>
          </nav>
        </div>
    )
}

export default Header;