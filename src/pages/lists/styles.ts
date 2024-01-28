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

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  height: 3rem;
  width: 100%;

  color: ${({ theme }) => theme.filter.text};
  font-size: 1.2rem;

  margin: 2rem 0 1rem 0;

  > input,
  select,
  button {
    height: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    min-width: 11rem;

    background-color: transparent;
    color: ${({ theme }) => theme.filter.text};
    border: 1px solid ${({ theme }) => theme.filter.text};
    font-size: 1rem;
    outline: none;

    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    margin: 5rem 0;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const FilterSelect = styled.select`
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const FilterInput = styled.input`
  &::placeholder {
    color: ${({ theme }) => theme.filter.text};
    font-size: 1rem;
  }
`;

export const SwitchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;
