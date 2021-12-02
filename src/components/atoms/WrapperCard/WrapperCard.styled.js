import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({disabled, success}) => css`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    box-shadow: 0 1px 8px 3px ${disabled ? 'red' : `${success ? 'green' : '#05456033'}`};
    transition: 0.3s;
    padding: 5px 0;
    pointer-events: ${disabled && !success ? 'none' : 'visible'};
    cursor: ${disabled && !success ? 'not-alloweb' : 'pointer'};

    :hover {
      box-shadow: 0 1px 8px 3px ${disabled && !success ? 'red' : '#3db8ecf5'};
    }
  `
);