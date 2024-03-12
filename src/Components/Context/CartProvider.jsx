import React, { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = props => {
    const [DressCart, SetDressCart] = useState([]);
    const AddDressItems = newItem => {
        console.log(newItem);
        const existingItemIndex = DressCart.findIndex(item => item.name === newItem.name && item.size === newItem.size && item.color === newItem.color);
        if (existingItemIndex !== -1) {
            const updatedCart = [...DressCart];
            updatedCart[existingItemIndex].quantity += 1;
            SetDressCart(updatedCart);
        } else {
            const UpdateCart = [...DressCart, { ...newItem, quantity: 1 }];
            SetDressCart(UpdateCart);
        }
    }
    const RemoveDressItems = deleteItem => {
        const existingItemIndex = DressCart.findIndex(item => item.name === deleteItem.name && item.size === deleteItem.size && item.color === deleteItem.color);

        if (existingItemIndex !== -1) {
            const updatedCart = [...DressCart];
            if (updatedCart[existingItemIndex].quantity > 1) {
                updatedCart[existingItemIndex].quantity -= 1;
            } else {
                updatedCart.splice(existingItemIndex, 1);
            }
            SetDressCart(updatedCart);
        }
    }
    const OBJ = { DressCart, AddDressItems, RemoveDressItems, };
    return (
        <CartContext.Provider value={OBJ}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;