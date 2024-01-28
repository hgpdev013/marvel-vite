import { List, SignOut } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import {
  PAGES_NAMES,
  PAGE_TYPES,
  PAGE_TYPES_KEY,
} from "../../utils/common-data";
import * as Styles from "./styles";
import { useAuth, useSidebar } from "../../hooks";

export const Navigation = () => {
  const navigate = useNavigate();
  const { toggleMenu } = useSidebar();
  const { handleLogout } = useAuth();

  return (
    <Styles.Container>
      <Styles.ListIcon onClick={toggleMenu}>
        <List />
      </Styles.ListIcon>
      <Styles.ListItem isReductable={false} onClick={() => navigate("/home")}>
        <img src="/marvel_logo.png" alt="MARVEL LOGO" />
      </Styles.ListItem>
      {Object.keys(PAGE_TYPES).map((key) => {
        return (
          <Styles.ListItem
            isReductable
            key={key}
            onClick={() => navigate(`/${key}`)}
          >
            {PAGES_NAMES[key as PAGE_TYPES_KEY]}
          </Styles.ListItem>
        );
      })}
      {
        <Styles.ListIcon>
          <SignOut onClick={handleLogout} />
        </Styles.ListIcon>
      }
    </Styles.Container>
  );
};
