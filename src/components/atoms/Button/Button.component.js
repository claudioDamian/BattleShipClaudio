import React from "react";
import PropTypes from 'prop-types';
import { MyButton } from "./Button.styled";

const Button = ({handlerClick, label}) => {
  return (
    <MyButton onClick={() => handlerClick()}>
      {label}
    </MyButton>
  )
};

Button.prototype = {
  handlerClick: PropTypes.func,
  label: PropTypes.string,
}
export default Button