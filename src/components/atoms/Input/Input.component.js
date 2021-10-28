import React from 'react';
import { InputText } from './Input.styled';

const Input = ({ textValue, handlerTextValue }) => {
  return (
    <InputText
      placeholder="Player name"
      value={textValue}
      onChange={(evt) => handlerTextValue(evt.target.value)}
    />
  )
};

export default Input;