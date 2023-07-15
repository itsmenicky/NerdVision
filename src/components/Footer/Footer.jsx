import React from 'react';
import './Footer.css';
import Facebook from '../../assets/iconmonstr-facebook-3 1.png';
import Instagram from '../../assets/iconmonstr-instagram-13 1.png';
import Linkedin from '../../assets/iconmonstr-linkedin-3 1.png';

export const Footer = () => {
  return(
    <footer className="footer">
      <h5 className="footer-logo"><strong>NERDVISION</strong></h5>

      <ul className="footer-contact">
        <li className="list-title">CONTATO</li>
        <li>Shooping Plaza Sul</li>
        <li><a href="https://wa.me/551127458443?text=Olá, gostaria de saber mais sobre a NerdVision!">(11) 2745-8443</a></li>
        <li><a href="https://www.google.com.br/maps/place/Praça+Leonor+Kaupa,+100+-+Jardim+da+Saúde,+São+Paulo+-+SP,+04151-100/@-23.619692,-46.6293755,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5ba986e722b1:0x7a55f21acc32426!8m2!3d-23.619692!4d-46.6267952!16s%2Fg%2F11bytp0h32?entry=ttu">Praça Leonor Kaupa, 100 - Jardim da Saúde, São Paulo - SP, 04151-100</a></li>
      </ul>

      <ul className="social-media-logos">
        <li><a href="https://pt-br.facebook.com"><img className="social-media" src={Facebook}/></a></li>
        <li><a href="https://www.instagram.com/applenick.exe/"><img className="social-media" src={Instagram}/></a></li>
        <li><a href="https://www.linkedin.com/in/nickolas-martins-6b0424255/"><img className="social-media" src={Linkedin}/></a></li>
      </ul>
      <hr id="border"></hr>
      <p className="sign">Site desenvolvido por <strong>Nickolas Gabriel</strong></p>
    </footer>
  );
};
