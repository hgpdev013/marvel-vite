import styled from "styled-components";
const getRandomPosition = (max: number) => {
  return Math.random() * max;
};

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const IconContainer = styled.div`
  z-index: 0;
  position: absolute;
  background-color: transparent;
  top: ${() => getRandomPosition(100 - 8)}%;
  left: ${() => getRandomPosition(100 - 4)}%;
  transform: rotate(
    ${() =>
      Math.random() <= 0.5 ? getRandomPosition(25) : -getRandomPosition(25)}deg
  );

  > svg {
    background-color: transparent;
    color: ${({ theme }) => theme.icons};
    width: 6rem;
    height: 6rem;
    opacity: 0.3;
  }
`;
