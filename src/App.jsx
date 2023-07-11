import React from 'react';
import {Header} from './partials/Header/Header.jsx';
import { CardContainer } from './containers/Card/CardContainer.jsx';
import {Provider} from './context/Provider';
import { Cart } from './components/Cart/Cart.jsx';

function App() {
  return (
    <Provider>
      <Header />
      <CardContainer />
      <Cart />
    </Provider>
  );
}

export default App;
