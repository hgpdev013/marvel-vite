import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  position: relative;
  max-width: 15rem;
  cursor: pointer;
  user-select: none;

  transition: all 0.3s ease-in-out;

  > img {
    position: relative;
    width: 15rem;
    height: 20rem;

    border-bottom: 2px solid ${({ theme }) => theme.text};
  }

  &:hover {
    box-shadow: 0 0 2rem ${({ theme }) => theme.primary};
    transform: scale(1.01);

    > div {
      h1 {
        display: flex;
        white-space: normal;
        overflow: visible;
        text-overflow: unset;
        -webkit-line-clamp: 0;
      }
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
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
