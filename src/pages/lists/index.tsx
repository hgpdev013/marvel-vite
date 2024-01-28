import { ArrowCircleUp } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Card,
  CarouselLoading,
  Layout,
  Navigation,
  Sidebar,
} from "../../components";
import { getCommonData } from "../../services";
import { OrderBy } from "../../types";
import {
  FormattedDataProps,
  GET_LIMIT,
  PAGE_TYPES_KEY,
  formatData,
} from "../../utils/common-data";
import * as Styles from "./styles";

export default function ListsPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [fetchedData, setFetchedData] = useState<FormattedDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  //TODO - implement filter context
  const [orderBy, setOrderBy] = useState<"name" | "modified">("name");
  const [startsWith, setStartsWith] = useState<string | undefined>(undefined);
  const [isDesc, setIsDesc] = useState(false);
  //TODO END
  const [abortController, setAbortController] = useState(new AbortController());

  const fetchDataPerType = useCallback(
    async (
      offset: number,
      typeToFetch: PAGE_TYPES_KEY,
      orderBy?: OrderBy,
      startsWith?: string,
      isDesc?: boolean
    ) => {
      setIsLoading(true);
      const controller = new AbortController();
      setAbortController(controller);

      try {
        const { data } = await getCommonData({
          limit: GET_LIMIT,
          offset: offset,
          type: typeToFetch as PAGE_TYPES_KEY,
          orderBy,
          startsWith,
          isDesc,
          signal: controller.signal,
        });

        const dataFormatted = data.results.map((value) =>
          formatData(value, typeToFetch as PAGE_TYPES_KEY, data.total)
        );

        setFetchedData((prev) => [...prev, ...dataFormatted]);
        setOffset(offset);
      } catch (error: any) {
        if (error?.name === "CanceledError") return;
        if (error?.response?.status === 429) {
          toast.error(
            "You have exceeded the request limit. Please try again later.",
            { toastId: "429" }
          );
          return;
        }

        toast.error("The type you tried to list doesn't exist.");
        navigate("/home");
      }
      setIsLoading(false);
    },
    [setFetchedData, navigate]
  );

  useEffect(() => {
    setFetchedData([]);
    setOffset(0);
    abortController.abort();

    fetchDataPerType(0, type as PAGE_TYPES_KEY, orderBy, startsWith, isDesc);
  }, [type, fetchDataPerType, startsWith, orderBy, isDesc]);

  const containerRef = useRef<HTMLDivElement | null>(null);

  function scrollToTop() {
    if (!containerRef.current) return;
    containerRef.current.scrollTop = 0;
  }
  return (
    <Layout showNavigation={false}>
      <Styles.Container ref={containerRef} id="scrollableDiv">
        <Navigation />
        <Sidebar />
        <Styles.FilterContainer>
          <span>Filter by</span>
          <Styles.FilterSelect
            value={orderBy}
            onChange={(e: any) =>
              setOrderBy(e.target.value as "name" | "modified")
            }
          >
            <option value="name">Name</option>
            <option value="modified">Modified</option>
          </Styles.FilterSelect>
          <Styles.FilterInput
            placeholder="Type part or full name..."
            value={startsWith || ""}
            onChange={(e: any) =>
              setStartsWith(e.target.value ? e.target.value : undefined)
            }
          />

          <Styles.SwitchButton onClick={() => setIsDesc((prev) => !prev)}>
            Ordered by
            {!isDesc ? " Asc." : " Desc."}
          </Styles.SwitchButton>
        </Styles.FilterContainer>
        <InfiniteScroll
          dataLength={fetchedData.length}
          next={() =>
            fetchDataPerType(
              offset + GET_LIMIT,
              type as PAGE_TYPES_KEY,
              orderBy,
              startsWith,
              isDesc
            )
          }
          scrollThreshold={0.8}
          hasMore={fetchedData.length < fetchedData[0]?.totalData}
          loader={""}
          scrollableTarget="scrollableDiv"
        >
          <Styles.Content>
            {fetchedData.map((data) => (
              <Card key={data.id} data={data} type={type as PAGE_TYPES_KEY} />
            ))}
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <CarouselLoading key={index} isWrappable />
                ))
              : fetchedData.length === 0 && <span>No results found.</span>}
          </Styles.Content>
        </InfiniteScroll>

        <Styles.TopButton onClick={() => scrollToTop()}>
          <ArrowCircleUp weight="duotone" />
        </Styles.TopButton>
      </Styles.Container>
    </Layout>
  );
}
