import styled, {css} from "styled-components";

export const MyButton = styled.button(
  ({disabled}) => css`
    color: ${disabled ? 'grey' : 'dodgerblue'};
    background-color: white;
    border: 4px solid ${disabled ? 'grey': '#2196F3'};
    border-radius: 6px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: 900;
    opacity: 90%;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    width: 200px;

    :hover {
      background: ${disabled ? 'grey': '#2196F3'};
      color: white;
    }
  `
);