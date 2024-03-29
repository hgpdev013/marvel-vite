import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CarouselLoadingProps {
  isWrappable: boolean;
}

export const CarouselLoading = ({ isWrappable }: CarouselLoadingProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: isWrappable ? "wrap" : "nowrap",
      }}
    >
      {[0, 1, 2, 3, 4].map((_, index) => (
        <div key={index} style={{ margin: "0 10px", width: "14.8rem" }}>
          <Skeleton height={300} baseColor="#ccc" />
        </div>
      ))}
    </div>
  );
};
