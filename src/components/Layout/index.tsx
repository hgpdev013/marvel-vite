import { PropsWithChildren } from "react";
import { Container } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      {children}
      <ToastContainer position="top-right" />
    </Container>
  );
};
