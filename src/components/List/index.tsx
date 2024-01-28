import { ArrowCircleUp } from "@phosphor-icons/react";
import { useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, CarouselLoading, Navigation, Sidebar } from "..";
import {
  FormattedDataProps,
  GET_LIMIT,
  PAGE_TYPES_KEY,
} from "../../utils/common-data";
import * as Styles from "./styles";

interface ListProps {
  data: FormattedDataProps[];
  type: PAGE_TYPES_KEY;
  fetchData: (offset: number, type: PAGE_TYPES_KEY) => void;
  offset: number;
  isLoading: boolean;
}

export const List = ({
  data,
  type,
  fetchData,
  offset,
  isLoading,
}: ListProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  function scrollToTop() {
    if (!containerRef.current) return;
    containerRef.current.scrollTop = 0;
  }

  return (
    <Styles.Container ref={containerRef} id="scrollableDiv">
      <Navigation />
      <Sidebar />
      <InfiniteScroll
        dataLength={data.length}
        next={() => fetchData(offset + GET_LIMIT, type)}
        scrollThreshold={0.8}
        hasMore={data.length < data[0]?.totalData}
        loader={""}
        scrollableTarget="scrollableDiv"
      >
        <Styles.Content>
          {data.map((data) => (
            <Card key={data.id} data={data} type={type} />
          ))}
          {isLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <CarouselLoading key={index} isWrappable />
            ))}
        </Styles.Content>
      </InfiniteScroll>
      <Styles.TopButton onClick={() => scrollToTop()}>
        <ArrowCircleUp weight="duotone" />
      </Styles.TopButton>
    </Styles.Container>
  );
};
