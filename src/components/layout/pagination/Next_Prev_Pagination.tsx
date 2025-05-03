import React from "react";
import { ArrowIcon } from "../../../assets/icons/Icon";

interface nextPrevType {
  next: string | null | undefined;
  prev: string | null | undefined;
  onNext: () => void;
  onPrev: () => void;
}
const Next_Prev_Pagination: React.FC<nextPrevType> = ({
  next,
  prev,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex items-center gap-5">
      <span
        onClick={onNext}
        className={`rotate-180 w-9 h-9 bg-grey rounded-lg flex flex-col items-center justify-center ${
          next ? "cursor-pointer" : "cursor-not-allowed"
        } `}
      >
        <ArrowIcon fill={next ? "var(--color-grey)" : "#3E323280"} />
      </span>
      <span
        onClick={onPrev}
        className={`w-9 h-9 bg-grey rounded-lg flex flex-col items-center justify-center ${
          prev ? "cursor-pointer" : "cursor-not-allowed"
        } `}
      >
        <ArrowIcon fill={prev ? "var(--color-grey)" : "#3E323280"} />
      </span>
    </div>
  );
};

export default Next_Prev_Pagination;
