import React from "react";
import "../Styles/Header.css";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    const Location = useLocation();
    return (
        <>
            <div className="HeadNav">
                <div className="HDNAME">
                    <h1 className="HDH1">TrendBlendz </h1>
                </div>
                {
                    Location.pathname === "/About" && (
                        <div className="HDLINKS">
                            <Link to="/Male" className="BTN Male">
                                <FontAwesomeIcon icon={faBagShopping} size="lg" style={{ color: "#ffffff", }} />
                            </Link>
                        </div>
                    )
                }
                {(Location.pathname === "/Male" || Location.pathname === "/View") && (
                    <div className="CARTLINKS">
                        <Link to="/Cart" className="CART">
                            <FontAwesomeIcon icon={faShoppingCart} size="xl" style={{ color: "#ffffff" }} />
                            <p>0</p>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
export default Header;