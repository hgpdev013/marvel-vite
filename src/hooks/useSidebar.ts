import { useContext } from "react";
import { SidebarContext } from "../contexts";

export const useSidebar = () => {
  const { isOpen, toggleMenu } = useContext(SidebarContext);
  return { isOpen, toggleMenu };
};
