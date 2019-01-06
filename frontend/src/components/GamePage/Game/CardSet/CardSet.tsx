import React from 'react';
import Card from './Card/Card';
import CardData from '../../../../models/CardData';
import './CardSet.scss';

interface Props {
  cards: CardData[]
}

const CardSet = (props: Props) => {
  return (
    <div className='card-set'>
      {props.cards.map((card, index) => <Card key={index} card={card}/>)}
    </div>
  );
};

export default CardSet;
