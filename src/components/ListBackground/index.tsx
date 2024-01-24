import {
  Alien,
  Anchor,
  Balloon,
  CoinVertical,
  Detective,
  FlowerLotus,
  Money,
  Lightning,
  PawPrint,
  Rocket,
  Siren,
  Snowflake,
  ShieldStar,
  Dna,
  FlyingSaucer,
} from "@phosphor-icons/react";

import * as Styles from "./styles";
import { PropsWithChildren, useMemo } from "react";

const icons = [
  Alien,
  Anchor,
  Balloon,
  CoinVertical,
  Detective,
  FlowerLotus,
  Money,
  Lightning,
  PawPrint,
  Rocket,
  Siren,
  Snowflake,
  ShieldStar,
  Dna,
  FlyingSaucer,
];

export const ListBackground = ({ children }: PropsWithChildren) => {
  const cachedIcons = useMemo(() => {
    return icons.map((value, index) => {
      const Icon = value;
      return (
        <Styles.IconContainer key={index}>
          <Icon weight="light" />
        </Styles.IconContainer>
      );
    });
  }, []);
  
  return (
    <Styles.Container>
      {children}
      {[0, 1].map((_) => cachedIcons)}
    </Styles.Container>
  );
};
