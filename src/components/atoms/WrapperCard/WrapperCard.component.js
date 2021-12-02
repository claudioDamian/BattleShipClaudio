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

WrapperCard.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  success: PropTypes.bool,
}
export default WrapperCard;