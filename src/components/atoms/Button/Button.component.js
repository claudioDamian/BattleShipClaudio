import React from "react";
import { MyButton } from "./Button.styled";

const Button = ({ handlerClick }) => {
    return (
        <MyButton onClick={() => handlerClick()}>
          START GAME
        </MyButton>
    )
};

export default Button