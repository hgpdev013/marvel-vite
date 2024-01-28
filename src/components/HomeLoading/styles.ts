import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem;
  padding: 0 0 5rem 0;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-items: center;
`;

export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
