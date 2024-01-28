import styled from "styled-components";

export const Container = styled.div`
  margin: 0 2rem;
  .slick-prev,
  .slick-next {
    &::before,
    &::after {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const CardContainer = styled.div`
  margin: 0 1rem;
  display: grid !important;
  grid-template-columns: 1fr;
  justify-items: center;
`;
