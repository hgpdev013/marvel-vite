import { useNavigate } from "react-router-dom";
import { useSidebar } from "../../hooks";
import {
  PAGES_NAMES,
  PAGE_TYPES,
  PAGE_TYPES_KEY,
} from "../../utils/common-data";
import * as Styles from "./styles";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { isOpen, toggleMenu } = useSidebar();

  function handleNavigate(key: PAGE_TYPES_KEY) {
    navigate(`/${key}`);
    toggleMenu();
  }

  return (
    <Styles.Container isOpen={isOpen}>
      {Object.keys(PAGE_TYPES).map((key) => {
        return (
          <Styles.ListItem
            key={key}
            onClick={() => handleNavigate(key as PAGE_TYPES_KEY)}
          >
            {PAGES_NAMES[key as PAGE_TYPES_KEY]}
          </Styles.ListItem>
        );
      })}
    </Styles.Container>
  );
};
