import React from 'react';
import Card from '../Card/Card.component';
import { CardsContainer } from './ScreenCards.styled';

const ScreenCards = ({ cardHandlerClick }) => {
  return (
    <CardsContainer>
      {[1,2,3].map(
        (i) => (<Card
          key={i}
          onClickEvent={() => cardHandlerClick(
            {shipName: 'crusier', code: `${i}c`, spaces: 3, position: null, state: 'fighting', selected: false}
          )}
          shipImg="cruiser.png"
          shipName="Cruiser"
          opacity
          count={`3 Spaces`}
        />)
      )}
      <Card
        onClickEvent={() => cardHandlerClick(
          {shipName: 'carrier', code: '4c', spaces: 4, position: null, state: 'fighting', selected: false}
        )}
        shipImg="carrier.png"
        shipName="Carrier"
        opacity
        count={`4 Spaces`}
      />
      <Card
        onClickEvent={() => cardHandlerClick(
            {shipName: 'submarine', code: '2s', spaces: 2, position: null, state: 'fighting', selected: false})}
        shipImg="submarine.png"
        shipName="Submarine"
        opacity
        count={`2 Spaces`}
      />
    </CardsContainer>
  )
};

export default ScreenCards;