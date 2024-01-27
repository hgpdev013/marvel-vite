import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.login.background};
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  margin: 0 auto;
  padding: 3rem 6rem;

  max-width: 40rem;
  max-height: 40rem;
  width: 100%;
  height: 100%;

  border-radius: 40px;

  background: ${({ theme }) => theme.login.contentBackground};
  box-shadow: ${({ theme }) => theme.login.shadow};

  > img {
    width: 14rem;
    height: 5rem;
  }
`;

export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: 0;
  background: ${({ theme }) => theme.login.inputBackground};
  color: ${({ theme }) => theme.login.text};

  &:focus {
    outline: none;
    border: 1.5px solid #000;
  }
`;

export const SignInButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  border: 0;

  color: #fff;
  background-color: #221f1f;

  font-size: 1.5rem;
  font-weight: 600;

  &:hover {
    transform: scale(1.02);
  }

  transition: all 0.2s ease-in-out;
`;
