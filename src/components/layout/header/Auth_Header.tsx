import React from "react";

interface authType {
  title: string;
  des: string;
}
const Auth_Header: React.FC<authType> = ({ title = "", des = "" }) => {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-dark-grey text-2xl"> {title}</h1>
      <p className="text-sm text-light-grey">{des}</p>
    </header>
  );
};

export default Auth_Header;
