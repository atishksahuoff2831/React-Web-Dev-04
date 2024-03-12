import React, { useCallback, useContext, useEffect, useState } from "react";
import "../Styles/Header.css";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Context/CartContext";
const Header = () => {
    const Location = useLocation();
    const DressCtx = useContext(CartContext);
    const [cartQuantity, SetCartQuantity] = useState(0);
    const updateCartQuantity = useCallback(() => {
        const TotalQuantity = DressCtx.DressCart.reduce((total, item) => total + item.quantity,0);
        SetCartQuantity(TotalQuantity);
    },[DressCtx.DressCart]);
    useEffect(()=>{
        updateCartQuantity();
    },[DressCtx.DressCart, updateCartQuantity]);
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
                {(Location.pathname === "/Male" || Location.pathname === "/Cart" || Location.pathname.startsWith("/View")) && (
                    <div className="CARTLINKS">
                        <Link to="/Cart" className="CART">
                            <FontAwesomeIcon icon={faShoppingCart} size="xl" style={{ color: "#ffffff" }} />
                            <p>{cartQuantity}</p>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
export default Header;