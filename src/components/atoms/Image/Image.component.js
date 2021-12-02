import React from 'react';
import PropTypes from 'prop-types';
import { WrapperImage } from './Image.styled';

const CardImg = ({shipImg}) => {
  return (
    <WrapperImage data-testid="img" ship={shipImg}></WrapperImage>
  )
};

CardImg.propTypes = {
  shipImg: PropTypes.string,
}
export default CardImg;