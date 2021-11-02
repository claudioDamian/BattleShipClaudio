import React from 'react';
import Card from '../Card/Card.component';
import { CardsContainer } from './ScreenCards.styled';

const ScreenCards = ({ cardHandlerClick, checkBoxValue, disable = false }) => {
  return (
    <CardsContainer>
      {[1,2,3].map(
        (i) => (<Card
          key={i}
          onClickEvent={() => cardHandlerClick({
            shipName: 'crusier',
            code: `${i}c`,
            spaces: 3,
            position: null,
            state: 'fighting',
            selected: false,
            vertical: false
          })}
          shipImg="cruiser.png"
          shipName="Cruiser"
          disable={disable}
          opacity
          count={`3 Spaces`}
          handlerCheckboxValue={checkBoxValue}
        />)
      )}
      <Card
        onClickEvent={() => cardHandlerClick({
          shipName: 'carrier',
          code: '4c',
          spaces: 4,
          position: null,
          state: 'fighting',
          selected: false,
          vertical: false,
        })}
        shipImg="carrier.png"
        shipName="Carrier"
        disable={disable}
        opacity
        count={`4 Spaces`}
        handlerCheckboxValue={checkBoxValue}
      />
      <Card
        onClickEvent={() => cardHandlerClick({
          shipName: 'submarine',
          code: '2s',
          spaces: 2,
          position: null,
          state: 'fighting',
          selected: false,
          vertical: false,
        })}
        shipImg="submarine.png"
        shipName="Submarine"
        disable={disable}
        opacity
        count={`2 Spaces`}
        handlerCheckboxValue={checkBoxValue}
      />
    </CardsContainer>
  )
};

export default ScreenCards;