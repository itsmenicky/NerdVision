import React, {useContext}from 'react';
import {CiCircleRemove} from 'react-icons/ci';
import './Cart.css';
import { formatCurrency } from '../../utils/formatCurrency';
import propTypes from 'prop-types';
import { AppContext } from '../../context/AppContext';


export const CartItem = ({data}) => {

  const {cartItems, setCartItems} = useContext(AppContext);


  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != data.id);
    setCartItems(updatedItems);
  };

  return(
    <section className="cart-item">
      <img src={data.image} alt="imagem do produto" className="cart-item-image"/>

      <div className="item-content">
        <h3 className="cart-item-title">{data.title}</h3>
        <h3 className="cart-item-price">{formatCurrency(data.price,'BRL')}</h3>

        <button type="button" className="btn-remove-item" onClick={handleRemoveItem}><CiCircleRemove /></button>
      </div>
    </section>
  );
};

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
