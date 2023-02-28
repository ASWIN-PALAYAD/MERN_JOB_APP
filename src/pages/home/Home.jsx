import React from 'react';
import { Featured } from '../../componets/Featured';
import Slide from '../../componets/Slide';
import TrustedBy from '../../componets/trustedBy';
import "./Home.scss"
import {cards} from '../../data'
import CatCard from '../../componets/CatCard';

const Home = () => {
  return (
    <div>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5} >
        {cards.map((card)=> (
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home