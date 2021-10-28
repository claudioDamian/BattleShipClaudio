import React from 'react';
import { ParagraphTitle } from './Paragraph.styled';

const Paragraph = ({ paragraph, opacity = false }) => {
  return (
  <ParagraphTitle opacity={opacity}>
    {paragraph}
  </ParagraphTitle>
  )
};

export default Paragraph;