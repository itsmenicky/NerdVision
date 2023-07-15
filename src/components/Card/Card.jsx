import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import propTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import {FaCartPlus} from 'react-icons/fa';
import './Card.css';
import { formatCurrency } from '../../utils/formatCurrency';
import { AppContext } from '../../context/AppContext';

export const CardBS = ({data}) => {

  const {cartItems, setCartItems} = useContext(AppContext);

  const handleAddCart = () =>{
    // Verifica se o item já existe no carrinho pelo data.id
    const itemExists = cartItems.some((item) => item.id === data.id);

    if (!itemExists) {
      setCartItems([...cartItems, data]);
    } else {
    // Item já existe no carrinho, exiba uma mensagem de erro ou realize outra ação desejada
      alert('Produto já incluso no carrinho! ;)');
    }
  };

  return(
    <div className="three-cols">
      <Card className="card">
        <Card.Img  className="imgCard" variant="top" src={data.image} />
        <Card.Body>
          <Card.Title id="titleTag">{data.title}</Card.Title>
          <Card.Title id="priceTag">{formatCurrency(data.price, 'BRL')}</Card.Title>
          <Card.Text>
            {data.description}
          </Card.Text>
          <Button className="addCart" variant="primary" onClick={handleAddCart}><FaCartPlus /></Button>
        </Card.Body>
      </Card>
    </div>
  );
};

CardBS.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
