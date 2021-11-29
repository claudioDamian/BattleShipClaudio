import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph.comopnent';
import { WrapperCard } from './TurnNameCard.styled';

const TurnNameCard = ({ title, name }) => {
  return (
    <WrapperCard>
      <Paragraph paragraph={title}/>
      <Paragraph paragraph={name} opacity />
    </WrapperCard>
  )
};

TurnNameCard.protoTypes = {
  title: PropTypes.string,
  name: PropTypes.string
}

export default TurnNameCard