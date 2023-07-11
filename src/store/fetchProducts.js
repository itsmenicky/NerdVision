import { getProducts } from '../services/glassesService';

export const fetchProducts = async () => {
  const data = getProducts();

  return data;
};
