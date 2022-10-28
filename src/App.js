import React, { useState } from 'react';
// Step 1 Import the data.js after creating it
import data from "./components/back/Data";
// Step 2 Import the header in the app.js after creating it in the front folder
import Header from './components/front/Header/Header';
// Step 3 Import BrowserRouter from the npm i react-dom-router library
import { BrowserRouter as Router } from 'react-router-dom';
// Step 4 Import the Routers.js into the App.js
import Root from './components/front/Routes/Root';

// Importar bootstrap - React bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// Pass productItems data as a props to the Root

const App = () => {

  // import the productItems from data and pass it in the Root as a props. You have to put it also in the Root file
  const {productItems} = data;
  // Step 5 with the useState create a functionality to set more cart items and pass it to the Route as props 
  const [cartItems, setCartItems] = useState([]);


  // Step 6 create the function handle add product that was already referenced in the Cart and the products 
  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    // If the product already exists then it increases the quantity of that item by 1
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist, quantity: ProductExist.quantity + 1} : item)
      );
      // If not, then it will add the new product in the cart
      } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };

  // Step 7 create the function to remove products from cart
  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1}: item)
      )
    }
  }
 
  // handleAddproduct to the root as props    
  return (
    <>
      <Router>
        <Header/>
        <Root 
          productItems={productItems} 
          cartItems={cartItems} 
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct} 
          handleCartClearance={handleCartClearance} 
        />
      </Router>
    </>
  )
}

export default App