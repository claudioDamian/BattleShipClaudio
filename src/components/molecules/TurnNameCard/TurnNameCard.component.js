import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph.comopnent';
import { WrapperCard } from './TurnNameCard.styled';

const TurnNameCard = ({ title, name }) => {
  return (
    <WrapperCard>
      <Paragraph paragraph={title} fontSize />
      <Paragraph paragraph={name} opacity fontSize />
    </WrapperCard>
  )
};

TurnNameCard.protoTypes = {
  title: PropTypes.string,
  name: PropTypes.string
}

export default TurnNameCard