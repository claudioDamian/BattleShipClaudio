import styled, { css } from "styled-components";

export const SquaresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(50px, 1fr));
  grid-gap: 1px;
  max-width: 510px;
  height: auto;
  background-color: #808080;
  opacity: 75%;
  padding: 5px;
  margin: 50px;
`;

export const Square = styled.div(
  ({color, disabled}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    background-color: ${color};
    cursor: ${disabled ? 'no-allowed': 'pointer'};
    pointer-events: ${disabled ? 'none' : 'display'};
  `
);