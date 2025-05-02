import React from "react";

interface userType {
  avatar: string;
  full_name: string;
  createdAt: string;
}

interface cartType {
  image: string;
  title: string;
  summary: string;
  user?: userType;
  direction: "column" | "row";
  self: boolean;
}
const Card = ({ data }) => {
  return <div>Card</div>;
};

export default Card;
