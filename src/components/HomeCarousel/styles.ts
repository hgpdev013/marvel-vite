import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem;

  ul {
    text-decoration: none;
    list-style: none;
    > li {
      &.slick-active {
        > button {
          background: ${({ theme }) => theme.secondary};
        }
      }
      > button {
        font-size: 0;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.primary};

        &::before {
          display: none;
        }

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;

export const SlideContainer = styled.div`
  margin: 0 auto;
  max-height: 80vh;
  padding: 10rem;
  /* overflow: auto; */
`;

export const SlideContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-items: center;
`;

export const SlideSubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  min-width: 15rem;
  max-width: 30rem;
  width: 100%;

  min-height: 15rem;
  max-height: 30rem;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

export const Description = styled.h2``;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 100px;
  border: none;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;
