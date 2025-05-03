import { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";

function usePaginatedData(endpoint: string, type = "page") {
  const [loading, setLoading] = useState(false);
  const [refetchData, setRefetchData] = useState();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({});
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [next, setNext] = useState(endpoint);
  const [prev, setPrev] = useState();
  // scroll
  const [hasMore, setHasMore] = useState(false);
  const fetchData = async (currentPage: number) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(endpoint, {
        params: { page: currentPage, ...query },
        paramsSerializer: (params: string | []) => {
          const searchParams = new URLSearchParams();
          Object.keys(params).forEach((key) => {
            const value = params[key];

            if (value !== null && value !== undefined) {
              if (Array.isArray(value)) {
                searchParams.append(key, value.join(","));
              } else {
                searchParams.append(key, value);
              }
            }
          });
          return searchParams.toString();
        },
      });

      const fetchedData = await response.data.results;
      if (type === "scroll") {
        setData((prevData) => {
          const allData =
            currentPage === 1
              ? [...fetchedData]
              : [...prevData, ...fetchedData];
          const uniqueData = allData.reduce((acc, item) => {
            if (!acc.some((existing) => existing.id === item.id)) {
              acc.push(item);
            }
            return acc;
          }, []);
          return uniqueData;
        });
      } else {
        setData(fetchedData);
      }
      setPages(response.data.pages);

      setNext(response.data.next);
      setPrev(response.data.previous);
      if (response.data.next) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      // console.log("error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setPage(1);
    fetchData(1);
  }, [query, refetchData]);

  const handleNext = () => {
    if (next) {
      const nextPage = page + 1;
      fetchData(nextPage);
      setPage(nextPage);
    }
  };
  const handlePrev = () => {
    if (prev) {
      const prePage = page - 1;
      fetchData(prePage);
      setPage(prePage);
    }
  };

  // for scroll
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const innerHeight = window.innerHeight;

    if (innerHeight + scrollTop + 1 >= scrollHeight && !loading && hasMore) {
      const nextPage = page + 1;
      fetchData(nextPage);
      setPage((pre) => pre + 1);
    }
  };
  return {
    loading,
    next,
    prev,
    query,
    setQuery,
    setRefetchData,
    data,
    setData,
    handleNext,
    handlePrev,
    handleScroll,
    page,
    pages,
  };
}

export default usePaginatedData;
