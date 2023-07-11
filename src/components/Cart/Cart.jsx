import React, { useContext } from 'react';
import { CartItem } from './CartItem';
import './Cart.css';
import { AppContext } from '../../context/AppContext';
import { formatCurrency } from '../../utils/formatCurrency';

export const Cart = () => {

  const {cartItems} = useContext(AppContext);
  const {cartVisible} = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return(
    <section className={`cart ${cartVisible ? 'cart-active' : ''}`}>
      <div className="cart-items">
        {
          cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>)
        }
      </div>

      <div className="cart-total"><strong>Total: </strong>‎ {formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
};
