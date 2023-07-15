import React from 'react';
import './OurTeam.css';
import LisaSteinhardt from './LisaSteinhardt.jpg';
import ThaisArduini from './ThaisArduino.png';
import GabrielSales from './GabrielSales.jpg';

export const OurTeam = () => {
  return(
    <section id="nosso-time" className="OurTeam">
      <h1 className="OurTeam-title">Nosso time</h1>

      <div className="profile">
        <div className="profile-area">
          <img className="OurTeam-img" src={LisaSteinhardt} alt="LisaSteinhardt" />
          <h2 className="profile-title">Lisa Steinhardt</h2>
          <p className="profile-content">Lisa Steinhardt, a visionária CEO por trás da NerdVision, lidera com paixão e expertise a 
        ótica que se tornou referência na cultura nerd. Com sua visão empreendedora, Lisa transformou NerdVision em um destino obrigatório 
        para os amantes da cultura pop, misturando estilo e autenticidade em cada quadro. Sua dedicação em oferecer uma experiência única, 
        juntamente com sua conexão genuína com a comunidade nerd, estabeleceu a NerdVision como um símbolo de inclusão e celebração da diversidade, 
        tornando-a uma empresa admirada por fãs e clientes em todo o mundo.</p>
        </div>

        <div className="profile-area">
          <img className="OurTeam-img" src={ThaisArduini} alt="ThaisArduini"/>
          <h2 className="profile-title">Thais Arduini</h2>
          <p className="profile-content">Thais Arduini, talentosa líder de design da NerdVision, leva a estética nerd a um novo nível 
        dentro da ótica. Com sua criatividade e habilidade artística, Thais desenvolve e faz a curadoria de uma coleção de armações de óculos que 
        capturam a essência dos personagens e universos nerds amados pelos fãs. Sua experiência em combinar elementos icônicos da cultura pop com 
        funcionalidade e conforto resulta em peças únicas que se tornam verdadeiras declarações de estilo geek. Sob a liderança de Thais, a 
        NerdVision continua a encantar os clientes, oferecendo uma experiência visualmente impressionante e autêntica, reafirmando sua posição 
        como um destino obrigatório para os aficionados da cultura nerd.</p>
        </div>

        <div className="profile-area">
          <img className="OurTeam-img" src={GabrielSales} alt="GabrielSales" />
          <h2 className="profile-title">Gabriel Sales</h2>
          <p className="profile-content">Gabriel Sales, líder de marketing estratégico da NerdVision, é a mente por trás das campanhas 
        e iniciativas que impulsionam o sucesso da ótica no mercado nerd. Com sua visão aguçada e conhecimento especializado, Gabriel desenvolve 
        estratégias de marketing inovadoras que captam a atenção e o interesse dos entusiastas da cultura pop. Sua capacidade de criar conexões 
        autênticas com a comunidade nerd, combinada com sua paixão pela ótica, impulsiona o crescimento contínuo da NerdVision, solidificando-a 
        como uma marca proeminente no universo geek. Sob a liderança de Gabriel, a NerdVision alcança novos públicos, amplia sua presença nas redes
        sociais e estabelece parcerias estratégicas, fortalecendo ainda mais sua posição de referência no mercado de ótica nerd.</p>
        </div>
      </div>
     
    </section>
  );
};
