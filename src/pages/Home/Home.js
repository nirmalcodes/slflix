import React from "react";
import { PlayIcon } from "@heroicons/react/20/solid";

// https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg
// https://image.tmdb.org/t/p/original/zsgGnOBVNaI7a62uRFH0JLGTVMo.jpg

// https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg
// https://image.tmdb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg
// https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg

const Home = () => {
  return (
    <>
      <div className="w-full h-[100vh] sm:h-[90vh] flex bg-sky-600 relative text-white">
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-black sm:bg-gradient-to-r sm:from-black" />

        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="https://image.tmdb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg"
            alt="backdrop-poster"
            className="w-full h-full object-cover hidden sm:block"
          />
          <img
            src="https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
            alt="backdrop-poster"
            className="w-full h-full object-cover object-center sm:hidden"
          />
        </div>

        <div className="relative z-20 self-end">
          <div className="">
            <button></button>
            <button className="py-2 px-4 flex w-full items-center rounded-md text-sm text-gray-800 bg-white">
              <PlayIcon className="h-5 w-5 mr-2 text-gray-800" aria-hidden="true" />{" "}
              Play
            </button>
            <button></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
