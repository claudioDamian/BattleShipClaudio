import styled from 'styled-components';

export const PlayScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1145px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

