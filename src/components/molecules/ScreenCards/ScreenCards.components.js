import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.component';
import { CardsContainer } from './ScreenCards.styled';

const ScreenCards = ({cardHandlerClick, checkBoxValue, disable = false}) => {
  return (
    <CardsContainer>
      {[1,2,3].map(
        (i) => (<Card
          key={i}
          onClickEvent={() => cardHandlerClick({
            shipName: 'crusier',
            code: `${i}c`,
            color: 'white',
            spaces: 3,
            position: null,
            impacts: [],
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
          color: 'white',
          spaces: 4,
          position: null,
          impacts: [],
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
          color: 'white',
          spaces: 2,
          position: null,
          impacts: [],
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

ScreenCards.prototype = {
  cardHandlerClick: PropTypes.func,
}
export default ScreenCards;