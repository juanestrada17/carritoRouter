import React from 'react';

// STEP 1 Import the Routers.js in the App.js 
// STEP 2 Import the Route, Routes from the router-dom

// STEP 3 after creating a products jsx import it here in the Route
import Products from "../Products/Products";
import { Route, Routes } from "react-router-dom";
import Cart from '../Cart/Cart';



// STEP 4 Passing the productItems as props to the Products component here and in the Product.jsx file as well
// Also pass the handleAddProduct into the home and cart component as props from the app.js

const Root = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
  return (
    <Routes>
      <Route 
        path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct} handleRemoveProduct= {handleRemoveProduct}/>}>
      </Route>
      <Route 
        path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct= {handleRemoveProduct} handleCartClearance= {handleCartClearance}/>}>
      </Route>
      
    </Routes>
  )
}

export default Root;