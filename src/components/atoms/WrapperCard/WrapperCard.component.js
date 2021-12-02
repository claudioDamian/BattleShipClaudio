import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './WrapperCard.styled';

const WrapperCard = ({children, disabled = false, success = false}) => {
  return (
    <Wrapper disabled={disabled} success={success}>
      {children}
    </Wrapper>
  )
};

WrapperCard.prototype = {
  children: PropTypes.node,
  disable: PropTypes.bool,
  success: PropTypes.bool,
}
export default WrapperCard;