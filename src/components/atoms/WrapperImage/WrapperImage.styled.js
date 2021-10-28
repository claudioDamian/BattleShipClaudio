import styled, { css } from 'styled-components';

export const WrapperImage = styled.div(
  ({ ship }) => css`
    background-color: white;
    background-image: url(${ship});
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 75px;
    width: 115px;
  `,
); 