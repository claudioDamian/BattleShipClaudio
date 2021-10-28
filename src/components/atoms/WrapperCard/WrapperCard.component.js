import React from 'react';
import { Wrapper } from './WrapperCard.styled';

const WrapperCard = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default WrapperCard;