import styled, { css } from 'styled-components';

export const ParagraphTitle = styled.p(
  ({ opacity, fontSize }) => css`
    font-size: ${fontSize ? '20px' : '14px'};
    font-weight: 700;
    padding: 0 10px;
    margin: 2px 0;
    color: #463a3a;
    opacity: ${opacity ? '55%' : '100%'};
  `
);