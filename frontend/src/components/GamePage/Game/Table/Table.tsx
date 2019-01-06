import React from 'react';
import CardSet from '../CardSet/CardSet';
import CardData, {UNKNOWN_VALUE} from '../../../../models/CardData';
import './Table.scss';

interface Props {
  cards: CardData[]
}

const Table = (props: Props) => {
  const defendingState = props.cards.length % 2 !== 0;
  const defendSetClassName = defendingState ? 'defend-set defending' : 'defend-set';
  const attackCards = props.cards.filter((card, index) => index % 2 === 0);
  const defendCards = props.cards.filter((card, index) => index % 2 !== 0);
  if (defendingState) {
    const finalHiddenCard = new CardData(UNKNOWN_VALUE, UNKNOWN_VALUE);
    defendCards.push(finalHiddenCard);
  }

  return (
    <div className='table'>
      <div className='table-inside'>
        <div className='table-content'>

          <div className='attack-set'>
            <CardSet cards={attackCards}/>
          </div>
          <div className={defendSetClassName}>
            <CardSet cards={defendCards}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Table;
