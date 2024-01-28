import { PropsWithChildren } from "react";
import { Navigation, Sidebar } from "..";
import { Container } from "./styles";
import { useSidebar } from "../../hooks";

interface LayoutProps {
  showNavigation: boolean;
}

export const Layout = ({
  children,
  showNavigation,
}: PropsWithChildren<LayoutProps>) => {
  const { isOpen } = useSidebar();
  if (showNavigation) {
    return (
      <Container isOpen={isOpen}>
        <Navigation />
        <Sidebar />
        {!isOpen && children}
      </Container>
    );
  }
  return <Container>{children}</Container>;
};
