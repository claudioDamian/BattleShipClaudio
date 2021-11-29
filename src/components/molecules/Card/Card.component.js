import React from 'react';
import PropTypes from 'prop-types';
import WrapperCard from '../../atoms/WrapperCard/WrapperCard.component';
import CardImage from '../../atoms/Image/Image.component';
import Checkbox from '../../atoms/Checkbox/Checkbox.component';
import Paragraph from '../../atoms/Paragraph/Paragraph.comopnent';
import { ContentContainer } from './Card.styled';

const Card = ({handlerCheckboxValue, onClickEvent, disable, shipImg, shipName, count, opacity = false}) => {
  return (
    <WrapperCard disable={disable}>
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
  handlerCheckboxValue: PropTypes.func,
  onClickEvent: PropTypes.func,
  shipImg: PropTypes.string,
  shipName: PropTypes.string,
  count: PropTypes.number,
  opacity: PropTypes.bool,
}
export default Card;