import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  max-width: 20rem;
  cursor: pointer;

  background-color: ${({ theme }) => theme.text};

  > img {
    width: 20rem;
    height: 20rem;

    border: 4px solid ${({ theme }) => theme.text};
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }

  &:hover {
    box-shadow: 0 0 2rem ${({ theme }) => theme.secondary};
    transition: all 0.3s ease-in-out;
    transform: scale(1.01);
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 4px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
`;
