import React, {useEffect, useContext} from 'react';
import { fetchProducts } from '../../store/fetchProducts';
import { CardBS } from '../../components/Card/Card';
import { AppContext } from '../../context/AppContext';

export const CardContainer = () => {

  const {products, setProducts} = useContext(AppContext);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return(
    <div id="nossos-produtos" className="linha">
      {
        products.map((product) => <CardBS key={product.id} data={product}/>)
      }
    </div>
  );
};
