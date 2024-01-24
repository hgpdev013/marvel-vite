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
];

export const ListBackground = ({ children }: PropsWithChildren) => {
  return (
    <Styles.Container toRotateValue={Math.random()}>
      {icons.map((value, index) => {
        const Icon = value;
        return <Icon key={index} weight="thin" />;
      })}
      {children}
    </Styles.Container>
  );
};
