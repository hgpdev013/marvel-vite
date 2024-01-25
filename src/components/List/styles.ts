import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;

  > div > div {
    display: flex;
    justify-content: center;
  }
`;

export const Content = styled.div`
  position: absolute;
  max-width: 85rem;
  width: 100%;

  height: 100%;
  padding: 0 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 1rem;

  background-color: transparent;
  z-index: 1;
`;

export const TopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  outline: 0;
  background-color: transparent;

  cursor: pointer;
  z-index: 2;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }

  > svg {
    width: 4rem;
    height: 4rem;

    color: ${({ theme }) => theme.primary};
  }
`;
