import React, { useState } from "react";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconFill } from "@heroicons/react/24/outline";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
      <img
        className="block h-auto w-full"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 h-full w-full text-white opacity-0 hover:bg-black/70 hover:opacity-100">
        <p className="flex h-full items-center justify-center whitespace-normal text-center text-xs font-bold text-white md:text-sm">
          {item?.title}
        </p>
        <span className="">
          {like ? (
            <HeartIconOutline
              className="absolute top-4 right-4 h-5 w-5"
              aria-hidden="true"
              onClick={() => setLike(!like)}
            />
          ) : (
            <HeartIconFill
              className="absolute top-4 right-4 h-5 w-5"
              aria-hidden="true"
              onClick={() => setLike(!like)}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default Movie;
