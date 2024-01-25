import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;

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
