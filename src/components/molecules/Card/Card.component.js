import React from 'react';
import WrapperCard from '../../atoms/WrapperCard/WrapperCard.component';
import CardImage from '../../atoms/WrapperImage/WrapperImage.component';
import Checkbox from '../../atoms/Checkbox/Checkbox.component';
import Paragraph from '../../atoms/Paragraph/Paragraph.comopnent';
import { ContentContainer } from './Card.styled';

const Card = ({ onClickEvent, shipImg, shipName, count, opacity = false }) => {
  return (
    <WrapperCard>
      <ContentContainer onClick={onClickEvent}>
        <CardImage shipImg={shipImg} />
        <Paragraph paragraph={shipName}/>
        <Paragraph paragraph={count} opacity={opacity} />
      </ContentContainer>
      <Checkbox />
    </WrapperCard>    
  )
};

export default Card;