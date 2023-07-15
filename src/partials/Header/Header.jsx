import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import TheyLive from '../../assets/TheyLive - banner.png';
import HarryPotter from '../../assets/harry potter - banner.png';
import Beatles from '../../assets/beatles - banner.png';
import Marvel from '../../assets/marvel - banner.png';
import './Header.css';
import {BsSunglasses} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { AppContext } from '../../context/AppContext';


export const Header = () => {

  const {cartItems, setCartVisible, cartVisible} = useContext(AppContext);

  return(
    <header className="header">
      <Navbar expand="lg" data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home"><BsSunglasses />  NerdVision</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="nav-links" className="me-auto">
              <Nav.Link href="#home">Quem Somos</Nav.Link>
              <Nav.Link href="#link">Nosso Time</Nav.Link>
              <Nav.Link href="#link">Nossos Produtos</Nav.Link>
              <Nav.Link>
                <button type="button" id="btnCart" onClick={() => setCartVisible(!cartVisible)}>
                  <AiOutlineShoppingCart />
                  {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel className="carousel" pause={false} interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={TheyLive}
            alt="They Live Sunglasses"
          />
          <Carousel.Caption>
            <h3 id="theylive" className="carouselTitles">Veja oque eles não querem que você veja com esses lindos óculos escuros</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={HarryPotter}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="carouselTitles">Se torne um verdadeiro(a) bruxo(a) com a incrível coleção Harry Potter!</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Beatles}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carouselTitles">Conheça nossa coleção dos Beatles</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Marvel}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carouselTitles">Descubra um mundo de visão épica com a Marvel Collection</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
};
