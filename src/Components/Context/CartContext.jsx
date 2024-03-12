import React from "react";
const CartContext = React.createContext ({
    AddDressItems: (item) => {},
    RemoveDressItems: (item) => {},
});
export default CartContext;