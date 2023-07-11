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
    setCartItems([...cartItems, data]);
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
