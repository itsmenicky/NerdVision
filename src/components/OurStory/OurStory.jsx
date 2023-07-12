import React from 'react';
import './OurStory.css';
import GlassesST from './GlassesST.jpg';

export const OurHistory = () => {
  return(
    <section className="linha">
      <div className="two-cols">
        <div className="two-cols-content">
          <h2 className="OurStory-title">Nossa História</h2>
          <p>A NerdVision, uma ótica única e inovadora, foi fundada por um grupo de amigos nerds com uma paixão avassaladora pela 
          cultura pop. Localizada no movimentado shopping Plaza Sul, a NerdVision é um verdadeiro paraíso para os aficionados por filmes, 
          quadrinhos e jogos. Com suas prateleiras repletas de armações inspiradas em personagens e obras icônicas, a ótica proporciona 
          aos clientes uma experiência única na hora de encontrar os óculos perfeitos para combinar com seu estilo geek. Além disso, a 
          NerdVision se destaca por realizar eventos temáticos incríveis, como lançamentos de filmes e fanmeetings, onde os visitantes 
          podem se conectar e compartilhar sua paixão pela cultura nerd. É o lugar perfeito para quem vê o mundo com os olhos de um 
          verdadeiro nerd.</p>
        </div>
        <img className="banner-two-cols" src={GlassesST} alt="Stranger Things Glasses" />
      </div>
    </section>
  );
};
