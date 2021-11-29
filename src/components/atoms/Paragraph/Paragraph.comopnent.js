import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphTitle } from './Paragraph.styled';

const Paragraph = ({paragraph, opacity = false}) => {
  return (
  <ParagraphTitle opacity={opacity}>
    {paragraph}
  </ParagraphTitle>
  )
};

Paragraph.prototype = {
  paragraph: PropTypes.string,
  opacity: PropTypes.bool,
}
export default Paragraph;