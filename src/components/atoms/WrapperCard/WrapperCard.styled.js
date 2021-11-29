import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({disable}) => css`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    box-shadow: 0 1px 8px 3px #05456033;
    transition: 0.3s;
    pointer-events: ${disable ? 'none' : 'visible'};
  `
);