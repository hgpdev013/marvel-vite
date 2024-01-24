import styled from "styled-components";

export const Container = styled.div<{ toRotateValue: number }>`
  width: 100%;
  height: 100vh;

  > svg {
    color: ${({ theme }) => theme.icons};
    width: 4rem;
    height: 4rem;
  }
`;
