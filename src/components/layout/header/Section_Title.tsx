import React from "react";
import { ArrowIcon } from "../../../assets/icons/Icon";

interface sectionTitleType {
  title: string;
  hasArrow?: boolean;
  onClick?: () => void;
}

const Section_Title: React.FC<sectionTitleType> = ({
  title,
  hasArrow,
  onClick,
}) => {
  return (
    <header>
      <h2 className="relative font-[500] text-black text-xl flex items-center gap-1 capitalize ">
        <span className="flex items-center w-[3px] h-[10px] bg-primary/78 rounded-full " />
        {title}
      </h2>
      <div>
        <span>
          <ArrowIcon />
        </span>
      </div>
    </header>
  );
};

export default Section_Title;
