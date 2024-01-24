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
} from "@phosphor-icons/react";

import * as Styles from "./styles";
import { PropsWithChildren } from "react";

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
];

export const ListBackground = ({ children }: PropsWithChildren) => {
  return (
    <Styles.Container>
      {children}
      {[0, 1].map((_) =>
        icons.map((value, index) => {
          const Icon = value;
          return (
            <Styles.IconContainer key={index}>
              <Icon weight="light" />
            </Styles.IconContainer>
          );
        })
      )}
    </Styles.Container>
  );
};
