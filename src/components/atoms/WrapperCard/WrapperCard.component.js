import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './WrapperCard.styled';

const WrapperCard = ({children, disable}) => {
  return (
    <Wrapper disable={disable} >
      {children}
    </Wrapper>
  )
};

WrapperCard.prototype = {
  children: PropTypes.node,
  disable: PropTypes.bool,
}
export default WrapperCard;