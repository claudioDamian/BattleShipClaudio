import React, { useState, useEffect } from 'react';
import { ButtonWrapper } from './ScreenStart.styled';
import Button from '../../atoms/Button/Button.component';
import Input from '../../atoms/Input/Input.component';

const ScreenStart = ({ handlerClickButton, handlerInputText }) => {
  return (
    <ButtonWrapper>
      <Input handlerTextValue={(event) => handlerInputText(event)}/>
      <Button handlerClick={() => handlerClickButton()}/>      
    </ButtonWrapper>
  )
};

export default ScreenStart;