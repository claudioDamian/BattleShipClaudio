import React from "react";
import PropTypes from 'prop-types';
import { MyButton } from "./Button.styled";

const Button = ({disabled, handlerClick, label}) => {
  return (
    <MyButton disabled={!disabled} onClick={() => handlerClick()}>
      {label}
    </MyButton>
  )
};

Button.prototype = {
  disabled: PropTypes.string,
  handlerClick: PropTypes.func,
  label: PropTypes.string,
}
export default Button