import styled, { css } from "styled-components";

export const Container = styled.ul<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    isOpen
      ? css`
          position: sticky;
          top: 0;
          display: flex;
          flex-direction: column;
          flex: 1;
          list-style: none;
          background-color: ${({ theme }) => theme.sidebar.background};
          color: ${({ theme }) => theme.sidebar.text};
          height: 100%;
          width: 100%;
          z-index: 19;
          overflow: hidden;
        `
      : css`
          display: none;
        `}

  transition: all 0.5s ease-in-out;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.2rem;
`;

export const ListItem = styled.li`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.sidebar.text};

  &:hover {
    background-color: ${({ theme }) => theme.sidebar.text};
    color: ${({ theme }) => theme.sidebar.background};
  }
`;

export const ListIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.sidebar.text};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg {
    width: 2rem;
    height: 2rem;
  }
`;
