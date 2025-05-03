import React from "react";
import { SaveIcon } from "../../../assets/icons/Icon";
import { useAuth } from "../../../context/AuthContext";
import axiosInstance from "../../../services/axiosInstance";
import { toast } from "react-toastify";

interface userType {
  avatar: string;
  full_name: string;
  createdAt: string;
  userId: string;
}

interface cartType {
  data: {
    image: string;
    title: string;
    summary: string;
    user?: userType;
    postId: string;
  };
  self?: boolean;
  direction?: "column" | "row";
}
const Card: React.FC<cartType> = ({
  data,
  direction = "column",
  self = false,
}) => {
  const { user } = useAuth();
  const savePost = async () => {
    try {
      const response = await axiosInstance.patch(
        `/api/post/${data?.postId}/save`
      );
    } catch (err) {
      toast.error(err?.response?.data?.errors);
    }
  };
  return (
    <div
      className={`bg-white main_shadow rounded-xl p-2.5 flex gap-2.5 ${
        direction === "column" ? "flex-col" : "flex-row"
      } `}
    >
      <img
        src={data?.image}
        alt={data?.title}
        className="h-[160px] max-w-[310px] rounded-lg w-full object-fill"
      />
      <div className="flex flex-col gap-2  flex-1">
        <h2 className="truncate h5 text-black">{data?.title}</h2>
        <p className="text-black/75 text-xs line-clamp-2">{data?.summary}</p>
        {self ? (
          <div>k</div>
        ) : (
          <figure className="bg-grey py-2.5 px-3 rounded-xl flex items-center gap-2">
            <img
              src={data?.user?.avatar}
              alt="avatar"
              className="w-9 h-9 rounded-lg"
            />
            <figcaption className="flex-1">
              <h3 className="truncate text-sm ">{data?.user?.full_name}</h3>
              <p className="text-black/75 text-xs">{data?.createdAt}</p>
            </figcaption>
            {user.userId !== data?.user?.userId && (
              <span className="cursor-pointer">
                <SaveIcon fill="#3E323280" />
              </span>
            )}
          </figure>
        )}
      </div>
    </div>
  );
};

export default Card;
