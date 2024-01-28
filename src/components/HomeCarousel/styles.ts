import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem;

  .slick-prev,
  .slick-next {
    &::before,
    &::after {
      color: ${({ theme }) => theme.text};
    }
  }

  ul {
    text-decoration: none;
    list-style: none;
    > li {
      &.slick-active {
        > button {
          background: ${({ theme }) => theme.carousel.selected};
        }
      }
      > button {
        font-size: 0;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.carousel.navigation};

        &::before {
          display: none;
        }

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin: 2rem;
  }
`;

export const SlideContainer = styled.div`
  margin: 0 auto;
  max-height: 80vh;
  padding: 0 0 5rem 0;
`;

export const SlideContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const SlideSubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 2rem;
  }
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
  font-size: 2.5rem;
  text-align: center;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;

export const Description = styled.span`
  font-size: 1.3rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 20rem;
  padding: 10px 20px;
  border-radius: 100px;
  border: none;

  background: ${({ theme }) => theme.carousel.background};
  color: ${({ theme }) => theme.carousel.text};

  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.carousel.selected};
    color: #fff;
    transform: scale(1.05);
  }

  transition: all 0.1s ease-in-out;
`;
