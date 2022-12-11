import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Movie from "../Movie/Movie";

const Row = ({ rowId, title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  //   console.log(movies);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h1 className="p-4 font-bold text-white sm:text-xl">{title}</h1>
      <div className="group relative flex select-none items-center">
        <ChevronLeftIcon
          className="absolute left-0 z-10 hidden h-10 w-10 cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          aria-hidden="true"
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowId}
          className="relative h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <ChevronRightIcon
          className="absolute right-0 z-10 hidden h-10 w-10 cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          aria-hidden="true"
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default Row;
