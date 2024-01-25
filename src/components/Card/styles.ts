import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  max-width: 15rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  > img {
    width: 15rem;
    height: 15rem;

    border-bottom: 2px solid ${({ theme }) => theme.text};
  }

  &:hover {
    box-shadow: -1rem 0.5rem 2rem ${({ theme }) => theme.secondary};
    transform: scale(1.01);
    transform: translate(10px, -7px);

    > div,
    h1 {
      display: flex;
      white-space: normal;
      overflow: visible;
      text-overflow: unset;
      -webkit-line-clamp: 0;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
`;
