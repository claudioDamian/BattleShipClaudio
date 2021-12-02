import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './ScreenStart.styled';
import Button from '../../atoms/Button/Button.component';
import Input from '../../atoms/Input/Input.component';

const ScreenStart = ({ disabled, handlerClickButton, handlerInputText }) => {
  return (
    <ButtonWrapper>
      <Input handlerTextValue={(event) => handlerInputText(event)}/>
      <Button disabled={disabled} handlerClick={() => handlerClickButton()} label='START GAME' />      
    </ButtonWrapper>
  )
};

ScreenStart.propTypes = {
  disabled: PropTypes.string,
  handlerClickButton: PropTypes.func,
  handlerInputText: PropTypes.func,
}
export default ScreenStart;