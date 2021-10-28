import React, { useState, useEffect } from 'react';
import { ButtonWrapper } from './ScreenStart.styled';
import Button from '../../atoms/Button/Button.component';
import Input from '../../atoms/Input/Input.component';

const ScreenStart = () => {
  const [ textValue, setTextValue ] = useState(null);
  useEffect(() => {
      
  }, [textValue]);
  
  const handlerClickButton = () => {
    console.log('You Clicked the button !!');
  };

  return (
    <ButtonWrapper>
      <Input handlerTextValue={(event) => setTextValue(event)}/>
      <Button handlerClick={() => handlerClickButton()}/>      
    </ButtonWrapper>
  )
};

export default ScreenStart;