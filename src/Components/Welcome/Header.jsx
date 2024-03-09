import React from "react";
import "../Styles/Header.css";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faPersonDress } from "@fortawesome/free-solid-svg-icons";
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
                                <FontAwesomeIcon icon={faPerson} size="xl" style={{color: "#ffffff",}} />
                            </Link>
                            <Link to="/Female" className="BTN Female">
                                <FontAwesomeIcon icon={faPersonDress} size="xl" style={{color: "#ffffff",}} />
                            </Link>
                        </div>
                   )
                }
            </div>
        </>
    );
}
export default Header;