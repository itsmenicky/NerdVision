import React, {useState} from 'react';
import propTypes from 'prop-types';
import { AppContext } from './AppContext';

export const Provider = ({children}) => {


  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);

  const value = {
    products, 
    setProducts,
    cartItems,
    setCartItems,
    cartVisible,
    setCartVisible,
    itemQuantity,
    setItemQuantity
  };

  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
