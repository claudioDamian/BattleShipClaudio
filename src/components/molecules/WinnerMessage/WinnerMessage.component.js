import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph.comopnent';
import Button from '../../atoms/Button/Button.component';
import { WrapperCard } from './WinnerMessage.styled';

const WinnerMessage = ({ disabled, handlerClickPlayAgain, message }) => {
  return (
    <WrapperCard>
      <Paragraph paragraph={message} />
      <Button disabled={disabled} handlerClick={() => handlerClickPlayAgain()} label='PLAY AGAIN' />
    </WrapperCard>
  )
};

WinnerMessage.propTypes = {
  disabled: PropTypes.string,
  handlerClickPlayAgain: PropTypes.func,
  message: PropTypes.string,
}

export default WinnerMessage