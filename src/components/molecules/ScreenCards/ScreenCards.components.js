import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.component';
import { CardsContainer, WrapperContainer } from './ScreenCards.styled';
import Instructions from '../Instructions/Instruction.component';

const ScreenCards = (cardHandlerClick, checkBoxValue, ships) => {
  return (
    <WrapperContainer>
    <Instructions />
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
          opacity
          count={`3 Spaces`}
          disabled={ships?.find(p => p.code === `${i}c`)?.selected}
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
        count={`4 Spaces`}
        code={'4c'}
        disabled={ships?.find(p => p.code === '4c')?.selected}
        opacity
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
        count={`2 Spaces`}
        code={'2s'}
        disabled={ships?.find(p => p.code === '2s')?.selected}
        opacity
        handlerCheckboxValue={checkBoxValue}
      />
    </CardsContainer>
    </WrapperContainer>
  )
};

ScreenCards.propTypes = {
  cardHandlerClick: PropTypes.func,
  checkBoxValue: PropTypes.func,
  ships: PropTypes.node,
}
export default ScreenCards;