import React from 'react';
import { WrapperImage } from './WrapperImage.styled';

const CardImg = ({ shipImg }) => {
  return (
    <WrapperImage ship={shipImg}></WrapperImage>
  )
};

export default CardImg;