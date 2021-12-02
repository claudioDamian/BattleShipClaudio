import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphTitle } from './Paragraph.styled';

const Paragraph = ({paragraph, opacity = false, fontSize = false}) => {
  return (
  <ParagraphTitle opacity={opacity} fontSize={fontSize} >
    {paragraph}
  </ParagraphTitle>
  )
};

Paragraph.propTypes = {
  paragraph: PropTypes.string,
  opacity: PropTypes.bool,
  fontSize: PropTypes.bool,
}
export default Paragraph;