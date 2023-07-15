import React, { useContext, useState } from 'react';
import { CiCircleRemove } from 'react-icons/ci';
import './Cart.css';
import { formatCurrency } from '../../utils/formatCurrency';
import propTypes from 'prop-types';
import { AppContext } from '../../context/AppContext';

export const CartItem = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [itemQuantity, setItemQuantity] = useState(data.quantity);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== data.id);
    data.quantity = 1;
    setCartItems(updatedItems);
  };

  const updateCartItems = (value) => {
    const itemActive = cartItems.findIndex((item) => item.id === data.id);
    const updatedCartItems = [...cartItems];
    updatedCartItems[itemActive].quantity = value;
    setCartItems(updatedCartItems);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    if (value >= 0){
      setItemQuantity(Number(value));
      updateCartItems(value);
    }
  };

  const handleBlur = () => {
    if (itemQuantity !== '') {
      setItemQuantity(Number(itemQuantity));
    }
  };

  return (
    <section className="cart-item">
      <img src={data.image} alt="imagem do produto" className="cart-item-image" />

      <div className="item-content">
        <h3 className="cart-item-title">{data.title}</h3>
        <h3 className="cart-item-price">{formatCurrency(data.price, 'BRL')}</h3>
        <input className="cart-item-qt" onChange={handleChange} onBlur={handleBlur} type="text" value={itemQuantity} />

        <button type="button" className="btn-remove-item" onClick={handleRemoveItem}>
          <CiCircleRemove />
        </button>
      </div>
    </section>
  );
};

CartItem.propTypes = {
  data: propTypes.object.isRequired,
};
