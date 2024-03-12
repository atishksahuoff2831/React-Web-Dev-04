import React, { useContext, useEffect, useState } from "react";
import '../Styles/Cart.css';
import CartContext from "../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    const DressCtx = useContext(CartContext);
    const [TotalAmount, SetTotalAmount] = useState(0);

    useEffect(() => {
        let total = 0;
        DressCtx.DressCart.forEach(item => {
            total += (item.price * item.quantity);
        });
        SetTotalAmount(total);
    }, [DressCtx.DressCart]);

    const BuyHandler = () => {
        alert ("Go To The Payment Section For  Purchase!");
    }

    return (
        <>
            <div className="CartW">
                <h2>Welcome To Cart Section!</h2>
            </div>
            <div className="TM">
                <div style={{"display":"flex"}}>
                    <p style={{"margin" : "10px", "fontSize" : "20px", "fontWeight" : "bold"}}>Total Amount:</p>
                    <p style={{"margin" : "10px", "fontSize" : "20px", "fontWeight" : "bold"}}>{TotalAmount}</p>
                </div>
                <div>
                    <button className="CRTBTN BY" onClick={BuyHandler}>Buy</button>
                </div>
            </div>
            <div className="CartList">
                {
                    DressCtx.DressCart.map((item, index) => (
                        <div key={index} className="CARTPR">
                            <div>
                                <img src={item.image} alt={item.name} width="100px" height="150px" style={{ "borderRadius": "20px", "padding": "10px", "objectFit": "cover", "border": "2px solid white" }} />
                            </div>
                            <div className="CARTPR-DTL">
                                <p><span style={{ "fontWeight": "bold" }}>Name: </span>{item.name}</p>
                                <p><span style={{ "fontWeight": "bold" }}>Price: </span> {item.price} /-</p>
                                <p><span style={{ "fontWeight": "bold" }}>Size: </span> {item.size}</p>
                                <p><span style={{ "fontWeight": "bold" }}>Qty:  </span> {item.quantity}</p>
                            </div>
                            <div className="CARTPR-BTN">
                                <button className="CRTBTN BT1" onClick={() => DressCtx.AddDressItems(item)}>
                                    <FontAwesomeIcon icon={faCartPlus} size="lg" style={{ color: "#ffffff", }} />
                                </button>
                                <button className="CRTBTN BT2" onClick={() => DressCtx.RemoveDressItems(item)}>
                                    <FontAwesomeIcon icon={faCartArrowDown} size="lg" style={{ color: "#ffffff", }} />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Cart;