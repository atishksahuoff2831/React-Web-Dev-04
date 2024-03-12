import React, { useContext, useState } from "react";
import ProductMale from '../ProductArray/ManArray';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import '../Styles/View.css';
import CartContext from "../Context/CartContext";
const View = () => {
    const DressCtx = useContext(CartContext);
    const { id } = useParams();
    const SelectedProduct = ProductMale.find(item => item.id === id);
    const [selectedImage, setSelectedImage] = useState(SelectedProduct.img);
    const [selectedColor, setSelectedColor] = useState("");
    const handleColorClick = (imgUrl, color) => {
        setSelectedImage(imgUrl);
        setSelectedColor(color);
    };
    const handleBuyClick = () => {
        const selectedProductInfo = {
            name: SelectedProduct.name,
            price: SelectedProduct.price,
            size: document.querySelector('.SelectP').value,
            color: selectedColor,
            image: selectedImage
        };
        console.log(selectedProductInfo);
        DressCtx.AddDressItems(selectedProductInfo);
    }
    return (
        <>
            <div className="ViewContainer">
                {
                    SelectedProduct && (
                        <div key={SelectedProduct.id} className="productCard">
                            <div>
                                <img src={selectedImage} alt={SelectedProduct.name} width="200px" height="300px" style={{ "borderRadius": "20px", "padding": "10px", "objectFit": "cover", "border": "2px solid white" }} />
                            </div>
                            <div className="PABTDIV">
                                <h4>{SelectedProduct.description}</h4>
                                <p><span style={{ "fontWeight": "bold" }}>Price:</span> {SelectedProduct.price} /-</p>
                                <div className="DCLRBOX">
                                    <span style={{ "fontWeight": "bold" }}>Color:</span>
                                    <div className="IDCLRBOX">
                                        <div onClick={() => handleColorClick(SelectedProduct.img1, SelectedProduct.clr1)} style={{ "backgroundColor": `${SelectedProduct.clr1}` }} className="CLRBOX"></div>
                                        <div onClick={() => handleColorClick(SelectedProduct.img2, SelectedProduct.clr2)} style={{ "backgroundColor": `${SelectedProduct.clr2}` }} className="CLRBOX"></div>
                                        <div onClick={() => handleColorClick(SelectedProduct.img3, SelectedProduct.clr3)} style={{ "backgroundColor": `${SelectedProduct.clr3}` }} className="CLRBOX"></div>
                                        <div onClick={() => handleColorClick(SelectedProduct.img4, SelectedProduct.clr4)} style={{ "backgroundColor": `${SelectedProduct.clr4}` }} className="CLRBOX"></div>
                                        <div onClick={() => handleColorClick(SelectedProduct.img5, SelectedProduct.clr5)} style={{ "backgroundColor": `${SelectedProduct.clr5}` }} className="CLRBOX"></div>
                                    </div>
                                </div>
                                <div className="SelectDiv">
                                    <span style={{ "fontWeight": "bold" }}>Size:</span>
                                    <select className="SelectP">
                                        {SelectedProduct.size.map((size, index) => (
                                            <option key={index} value={size}>{size}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="CartBuy">
                                    <Link to="/Cart" className="Buy" onClick={handleBuyClick}>
                                        Buy
                                        <FontAwesomeIcon icon={faShoppingCart} size="xl" style={{ color: "#ffffff" }} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </>
    );
}
export default View;