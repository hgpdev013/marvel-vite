import styled from "styled-components";

export const Container = styled.ul`
  position: sticky;
  top: 0;
  z-index: 20;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-around;

  padding: 0.5rem 1rem;

  background-color: ${({ theme }) => theme.navbar.background};
  color: ${({ theme }) => theme.navbar.text};
  text-shadow: 0 0 0.5rem ${({ theme }) => theme.navbar.background};

  list-style: none;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const ListItem = styled.li<{
  isReductable?: boolean;
  isSelected?: boolean;
}>`
  cursor: pointer;
  min-width: 2rem;
  font-size: 1.2rem;
  user-select: none;

  color: ${({ theme, isSelected }) =>
    isSelected ? theme.navbar.text : theme.primary};

  > img {
    width: 100%;
    height: 100%;

    max-height: 4rem;
    max-width: 8rem;
  }

  @media (max-width: 768px) {
    display: ${({ isReductable }) => (isReductable ? "none" : "flex")};
  }

  &:hover {
    transform: scale(1.05);
  }

  transition: all 0.3s ease-in-out;
`;

export const ListIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.navbar.text};

  > svg {
    width: 2rem;
    height: 2rem;
  }

  &:first-child {
    display: none;
  }

  &:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    &:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
