import React, { useContext, useEffect} from 'react';
import { CartItem } from './CartItem';
import './Cart.css';
import { AppContext } from '../../context/AppContext';
import { formatCurrency } from '../../utils/formatCurrency';

export const Cart = () => {

  const {cartItems, cartVisible} = useContext(AppContext);

  const updateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    // Atualiza o total da compra
    // Pode ser armazenado em um estado separado ou utilizado diretamente
    return totalPrice;
  };

  const totalPrice = updateTotalPrice();

  useEffect(() => {
    updateTotalPrice();
  }, [cartItems]);

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
