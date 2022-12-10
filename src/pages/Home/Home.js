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
    <div className="h-[80vh] w-full text-white sm:h-[75vh]">
      <div className="h-full w-full">
        <div className="absolute h-[80vh] w-full bg-gradient-to-t from-black sm:h-[75vh] sm:bg-gradient-to-r"></div>
        <img
          className="hidden h-full w-full object-cover object-top sm:block"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <img
          className="block h-full w-full object-cover sm:hidden"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
        />
        <div className="absolute bottom-[15%] w-full p-6 sm:top-[20%] sm:w-2/5 sm:p-9">
          <h1 className="text-center text-2xl font-bold sm:text-left sm:text-4xl">
            {movie?.title}
          </h1>
          <p className="mt-3 hidden w-full sm:line-clamp-4">
            {movie?.overview}
          </p>
          <div className="my-4 flex gap-4">
            <button className="flex select-none items-center rounded-md border bg-white py-2 px-5 font-bold text-gray-800">
              <PlayIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Play
            </button>
            <button className="flex select-none items-center rounded-md border border-transparent bg-white/30 py-2 px-5 font-bold text-white backdrop-blur-sm">
              <ClockIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Watch Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
