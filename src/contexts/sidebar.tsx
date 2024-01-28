import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface SidebarContextData {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const SidebarContext = createContext({} as SidebarContextData);

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth && windowWidth > 768) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </SidebarContext.Provider>
  );
};
