import React from 'react';
import {Header} from './partials/Header/Header.jsx';
import { CardContainer } from './containers/Card/CardContainer.jsx';
import {Provider} from './context/Provider';
import { Cart } from './components/Cart/Cart.jsx';
import { OurHistory } from './components/OurStory/OurStory.jsx';
import { OurTeam } from './components/OurTeam/OurTeam.jsx';
import { Footer } from './components/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <Provider>
        <Header />
        <CardContainer />
        <Cart />
      </Provider>
      <OurHistory />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default App;
