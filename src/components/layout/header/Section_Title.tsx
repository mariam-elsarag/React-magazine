import React from "react";

interface sectionTitleType {
  title: string;
  children?: React.ReactNode;
}

const Section_Title: React.FC<sectionTitleType> = ({ title, children }) => {
  return (
    <header className="flex items-center justify-between gap-4">
      <h2 className="relative font-[500] text-black text-xl flex items-center gap-1 capitalize ">
        <span className="flex items-center w-[3px] h-[10px] bg-primary/78 rounded-full " />
        {title}
      </h2>
      <div>{children}</div>
    </header>
  );
};

export default Section_Title;
