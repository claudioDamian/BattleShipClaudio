import React from 'react';
import WrapperCard from '../../atoms/WrapperCard/WrapperCard.component';
import Paragraph from '../../atoms/Paragraph/Paragraph.comopnent';

const Instructions = () => {
  return (
    <WrapperCard success>
      <Paragraph
        paragraph="1. Select a ship and if you want can choose the vertical position( by default is horizontal)."
      />
      <Paragraph
        paragraph="2. Put the selected ship in the board (You have five ships to put in the board)."
      />
      <Paragraph
        paragraph="3. When you have the five ships in the board, enter your name and press the START GAME button"
      />
      <Paragraph
        paragraph="4. Find the ships of the CPU clicking squares and destroy her ships."
      />
    </WrapperCard>
  )
};

export default Instructions