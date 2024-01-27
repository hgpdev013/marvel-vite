import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 0.5rem ${({ theme }) => theme.text};

  > img {
    width: 100%;
    height: 100%;

    max-height: 4rem;
    max-width: 8rem;
  }
`;
