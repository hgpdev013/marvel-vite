import { PropsWithChildren } from "react";
import { Container } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigation } from "..";

interface LayoutProps {
  showNavigation: boolean;
}

export const Layout = ({
  children,
  showNavigation,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <Container>
      <ToastContainer position="top-right" />
      {showNavigation && <Navigation />}
      {children}
    </Container>
  );
};
