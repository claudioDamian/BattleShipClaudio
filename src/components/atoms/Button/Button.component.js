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

Button.propTypes = {
  disabled: PropTypes.string,
  handlerClick: PropTypes.func,
  label: PropTypes.string,
}
export default Button