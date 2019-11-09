import React from "react";
import "./header.css";

const Header = () => {
    return(
        <div className="container">
            <h2 className="siteName">Shopping Site</h2>
                <nav className="homfav">
                    <button className="homfav1" href="#">Home</button>
                    <button className="homfav2" href="favourites">Favourites</button>
                </nav>
            {/* <div className="list">
            <span>Varities</span>
            <span>Size</span>
            <span>Qty</span>
            <span>Price</span>
            </div> */}
            
        </div>
    )
}

export default Header;