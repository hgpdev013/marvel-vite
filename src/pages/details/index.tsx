import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetails } from "../../services";
import { PAGE_TYPES } from "../../utils/common-data";
import * as Styles from "./styles";

export default function DetailsPage() {
  const { id, type } = useParams();
  const navigate = useNavigate();

  async function fetchDataByIdAndType(
    typeToFetch: keyof typeof PAGE_TYPES,
    id: number
  ) {
    try {
      const { data } = await getDetails(typeToFetch, id);
    } catch (error) {
      navigate(`/${typeToFetch}`);
    }
  }

  useEffect(() => {
    if (!id || !type) return;
    fetchDataByIdAndType(type as keyof typeof PAGE_TYPES, Number(id));
  }, [id, type]);

  return (
    <Styles.Container>
      <div>
        <h1>{type}</h1>
      </div>
    </Styles.Container>
  );
}
