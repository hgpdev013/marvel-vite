import { ArrowCircleUp } from "@phosphor-icons/react";
import { useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "..";
import { GET_LIMIT } from "../../utils/common-data";
import * as Styles from "./styles";

interface ListProps {
  data: {
    id: number;
    name: string;
    description: string;
    image: string;
    totalData: number;
  }[];
  type: "comic" | "creator" | "character";
  fetchData: (offset: number) => void;
  offset: number;
}

export const List = ({ data, type, fetchData, offset }: ListProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  function scrollToTop() {
    if (!containerRef.current) return;
    containerRef.current.scrollTop = 0;
  }

  return (
    <Styles.Container ref={containerRef} id="scrollableDiv">
      <InfiniteScroll
        dataLength={data.length}
        next={() => fetchData(offset + GET_LIMIT)}
        scrollThreshold={0.9}
        hasMore={data.length < data[0]?.totalData}
        loader={""}
        scrollableTarget="scrollableDiv"
      >
        <Styles.Content>
          {data.map((data) => (
            <Card key={data.id} data={data} type={type} />
          ))}
        </Styles.Content>
      </InfiniteScroll>
      <Styles.TopButton onClick={() => scrollToTop()}>
        <ArrowCircleUp weight="duotone" />
      </Styles.TopButton>
    </Styles.Container>
  );
};