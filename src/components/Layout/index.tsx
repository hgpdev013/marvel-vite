import { PropsWithChildren } from "react";
import { Container } from "./styles";
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
      {showNavigation && <Navigation />}
      {children}
    </Container>
  );
};
