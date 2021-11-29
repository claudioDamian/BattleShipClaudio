import React from 'react';
import PropTypes from 'prop-types';
import { InputText } from './Input.styled';

const Input = ({textValue, handlerTextValue}) => {
  return (
    <InputText
      placeholder="Player Name"
      value={textValue}
      onChange={(evt) => handlerTextValue(evt.target.value)}
    />
  )
};

Input.prototype = {
  textValue: PropTypes.string,
  handlerTextValue: PropTypes.func
}
export default Input;