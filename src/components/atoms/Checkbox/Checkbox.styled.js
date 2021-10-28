import styled, { css } from 'styled-components';

export const CheckboxStyled = styled.input(
  ({ type }) => css`
    input[type=${type}] {
        position: relative;
        width: 1.5em;
        height: 1.5em;
        color: $black;
        border: 1px solid $gray;
        border-radius: 4px;
        appearance: none;
        outline: 0;
        cursor: pointer;
        transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
        &::before {
          position: absolute;
          content: '';
          display: block;
          top: 2px;
          left: 7px;
          width: 8px;
          height: 14px;
          border-style: solid;
          border-color: $white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          opacity: 0;
        }
        &:checked {
          color: $white;
          border-color: $green;
          background: $green;
            &::before {
              opacity: 1;
            }
        }
    }
  `,
);