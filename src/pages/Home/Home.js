import React, { useEffect, useState } from "react";
import requests from "../../Requests";
import axios from "axios";
import { PlayIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  // console.log(movies);
  console.log("random movie ", movie);

  return (
    <div className="h-[80vh] w-full select-none text-white sm:h-[75vh]">
      <div className="h-full w-full">
        <div className="absolute h-[80vh] w-full bg-gradient-to-t from-black sm:h-[75vh] sm:bg-gradient-to-r"></div>
        <img
          className="hidden h-full w-full object-cover object-top sm:block"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <img
          className="block h-full w-full object-cover object-top sm:hidden"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
        />
        <div className="absolute bottom-[15%] w-full select-none p-6 sm:top-[20%] sm:w-3/4 sm:p-9 md:w-1/2 lg:w-2/5">
          <h1 className="text-center text-3xl font-bold sm:text-left sm:text-4xl">
            {movie?.title}
          </h1>
          <p className="mt-3 hidden w-full sm:line-clamp-4">
            {movie?.overview}
          </p>
          <div className="my-4 flex items-center justify-center sm:justify-start">
            <button className="flex w-max select-none items-center rounded-md border bg-white py-2 px-9 text-center font-bold text-gray-800 sm:px-5">
              <PlayIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              <span className="block">Play</span>
            </button>

            <button className="ml-4 flex w-max select-none flex-col items-center rounded-md border border-transparent p-2 text-center text-xs text-white sm:flex-row sm:bg-white/30 sm:py-2 sm:px-5 sm:text-base sm:font-bold sm:backdrop-blur-sm">
              <ClockIcon className="h-5 w-5 sm:mr-2" aria-hidden="true" />
              <span className="mt-1 block sm:m-0">Watch Later</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
