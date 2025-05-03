import React from "react";
import Section_Title from "../../components/layout/header/Section_Title";
import Card from "../../components/layout/card/Card";
import usePaginatedData from "../../hooks/usePaginatedData";
import Next_Prev_Pagination from "../../components/layout/pagination/Next_Prev_Pagination";

const Popular_Post = () => {
  const { data, next, prev, handleNext, handlePrev } = usePaginatedData(
    "/api/home/post/most-viewed"
  );

  return (
    <section className="grid gap-7">
      <Section_Title title="popular posts">
        <Next_Prev_Pagination
          next={next}
          prev={prev}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </Section_Title>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xs:gap-4 sm:gap-6">
        {data?.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Popular_Post;
