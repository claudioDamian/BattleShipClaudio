import styled, { css } from 'styled-components';

export const ContentContainer = styled.div(
  ({ opacity}) => css`
    display: flex;
    cursor: ${opacity ? 'no-allowed' : 'pointer'};
    flex-direction: column;
  `
);