import { List, Moon, SignOut, Sun } from "@phosphor-icons/react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PAGES_NAMES,
  PAGE_TYPES,
  PAGE_TYPES_KEY,
} from "../../utils/common-data";
import * as Styles from "./styles";
import { useAuth, useSidebar, useTheme } from "../../hooks";

export const Navigation = () => {
  const navigate = useNavigate();
  const { isOpen, toggleMenu } = useSidebar();
  const { handleLogout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { type } = useParams();

  return (
    <Styles.Container>
      <Styles.ListIcon className="hidden" onClick={toggleMenu}>
        <List />
      </Styles.ListIcon>
      <Styles.ListItem
        isReductable={false}
        onClick={() => {
          navigate("/home");
          isOpen && toggleMenu();
        }}
      >
        <img src="/marvel_logo.png" alt="MARVEL LOGO" />
      </Styles.ListItem>
      {Object.keys(PAGE_TYPES).map((key) => {
        return (
          <Styles.ListItem
            isSelected={type !== key}
            isReductable
            key={key}
            onClick={() => navigate(`/${key}`)}
          >
            {PAGES_NAMES[key as PAGE_TYPES_KEY]}
          </Styles.ListItem>
        );
      })}
      <Styles.GroupIcons>
        <Styles.ListItem isReductable>
          <Styles.ListIcon onClick={toggleTheme}>
            {theme === "light" ? <Sun /> : <Moon />}
          </Styles.ListIcon>
        </Styles.ListItem>
        <Styles.ListItem isReductable={false}>
          <Styles.ListIcon>
            <SignOut onClick={handleLogout} />
          </Styles.ListIcon>
        </Styles.ListItem>
      </Styles.GroupIcons>
    </Styles.Container>
  );
};
