import React, { useEffect, useState } from "react";
import requests from "../../Requests";
import axios from "axios";
import HeroImage from "../../components/HeroImage/HeroImage";
import { PlusIcon, PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
const key = process.env.REACT_APP_TMDB_API_KEY;

const Home = () => {
  const [movie, setMovie] = useState(null);
  const [movieLogo, setMovieLogo] = useState([]);

  console.log(movie);
  console.log(movieLogo);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      // Store response results in a variable
      const movieList = response.data.results;
      // console.log(movieList);

      // Select and store a random movie in a variable
      const randomMovie =
        movieList[Math.floor(Math.random() * movieList.length)];
      // console.log(randomMovie);

      // Store the ID value in a variable
      const id = randomMovie.id;
      // console.log(id);

      // setMovie
      setMovie(randomMovie);

      // Use the ID value to call another axios get request
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/images?api_key=${key}&&language=en-US&include_image_language=en,null`
        )
        .then((response) => {
          // Store response results in a variable
          // const movieImages = response.data;
          const movieLogoImages = response.data.logos;
          // console.log(movieImages);
          console.log(movieLogoImages);

          // setMovieLogo
          setMovieLogo(movieLogoImages);
        });
    });
  }, []);

  return (
    <div className="relative h-screen w-full bg-slate-900">
      <HeroImage
        posterImg={movie?.poster_path}
        backdropImg={movie?.backdrop_path}
        imageAlt={movie?.title}
      />
      <div className="relative z-[8] flex h-full w-full flex-col justify-end px-6 py-8 sm:justify-center md:block md:py-[72px] md:px-12">
        <div className="w-full sm:w-[50%] md:w-[36%] lg:absolute lg:top-1/4">
          {movieLogo.length > 0 && (
            <div className="mb-7 flex w-full items-center justify-center sm:mb-4 sm:justify-start md:mb-5">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieLogo[0]?.file_path}`}
                alt={movie?.title}
                className="max-h-[80px] min-h-[60px] max-w-full "
              />
            </div>
          )}
          {movieLogo.length === 0 && (
            <h1 className="mb-4 text-center text-2xl font-medium sm:text-left">
              {movie?.title}
            </h1>
          )}

          <p className="text-lg mb-4 hidden font-normal sm:line-clamp-2 md:line-clamp-3">
            {movie?.overview}
          </p>

          <div className="flex items-center justify-center gap-4 sm:justify-start">
            <button className="flex w-16 flex-col items-center justify-center text-xs sm:hidden sm:flex-row">
              <PlusIcon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              My List
            </button>
            <button className="flex w-[132px] items-center justify-center rounded bg-white p-2 pr-4 font-medium text-black sm:w-auto sm:px-8">
              <PlayIcon
                className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
                aria-hidden="true"
              />
              Play
            </button>
            <button className="rounde flex w-16 flex-col items-center justify-center rounded text-xs sm:w-auto sm:flex-row sm:bg-gray-200/30 sm:px-8 sm:py-2  sm:text-base sm:font-medium sm:backdrop-blur-sm ">
              <InformationCircleIcon
                className="h-5 w-5 sm:hidden sm:h-6 sm:w-6"
                aria-hidden="true"
              />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
