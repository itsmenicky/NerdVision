export const formatCurrency = (value, currency) => {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: currency
  });
};
