import React from "react";
import '../Styles/MaleProducts.css';
import { Link } from "react-router-dom";
import ProductMale from '../ProductArray/ManArray';
const MaleProducts = () => {
    return (
        <>
            <div className="Container">
                <h2 className="DTL H2">Men's Full Shirt</h2>
                <div className="MaleFullShirt">
                    {
                        ProductMale.filter(item => item.id.startsWith("FullShirt")).map(MFS => (
                            <div key={MFS.id} className="MFSCard">
                                <img src={MFS.img} alt={MFS.name} width="200px" height="250px" style={{ "borderRadius": "20px", "padding": "10px","objectFit":"cover" }} />
                                <div className="CDTL">
                                    <h4 className="DTL">{MFS.name}</h4>
                                    <h4 className="DTL">{MFS.price} /-</h4>
                                </div>
                                <div className="VIEW">
                                    <Link to={`/View/${MFS.id}`} className="VW">View</Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="Container1">
                <h2 className="DTL H2">Men's Half Shirt</h2>
                <div className="MaleFullShirt">
                    {
                        ProductMale.filter(item => item.id.startsWith("HalfShirt")).map(MFS => (
                            <div key={MFS.id} className="MFSCard">
                                <img src={MFS.img} alt={MFS.name} width="200px" height="250px" style={{ "borderRadius": "20px", "padding": "10px","objectFit":"cover" }} />
                                <div className="CDTL">
                                    <h4 className="DTL">{MFS.name}</h4>
                                    <h4 className="DTL">{MFS.price} /-</h4>
                                </div>
                                <div className="VIEW">
                                    <Link to={`/View/${MFS.id}`} className="VW">View</Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
export default MaleProducts;