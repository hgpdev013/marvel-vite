import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 2rem;

  justify-items: center;
  align-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
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
`;

export const Description = styled.span`
  font-size: 1.3rem;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const SubDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
