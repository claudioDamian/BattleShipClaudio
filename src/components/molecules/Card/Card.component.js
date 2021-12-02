import React from 'react';
import PropTypes from 'prop-types';
import WrapperCard from '../../atoms/WrapperCard/WrapperCard.component';
import CardImage from '../../atoms/Image/Image.component';
import Checkbox from '../../atoms/Checkbox/Checkbox.component';
import Paragraph from '../../atoms/Paragraph/Paragraph.comopnent';
import { ContentContainer } from './Card.styled';

const Card = ({handlerCheckboxValue, onClickEvent, disabled, shipImg, shipName, count, opacity = false}) => {
  return (
    <WrapperCard disabled={disabled}>
      <ContentContainer onClick={onClickEvent}>
        <CardImage shipImg={shipImg} />
        <Paragraph paragraph={shipName}/>
        <Paragraph paragraph={count} opacity={opacity} />
      </ContentContainer>
      <Checkbox handlerCheckBox={handlerCheckboxValue} />
    </WrapperCard>    
  )
};

Card.prototype = {
  disabled: PropTypes.bool,
  handlerCheckboxValue: PropTypes.func,
  onClickEvent: PropTypes.func,
  shipImg: PropTypes.string,
  shipName: PropTypes.string,
  count: PropTypes.number,
  opacity: PropTypes.bool,
}
export default Card;