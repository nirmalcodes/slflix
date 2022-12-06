import React from "react";
import { Link } from "react-router-dom";
import FilmOutline from "../Icons/FilmOutline";
import HomeOutline from "../Icons/HomeOutline";
import NewsPaperOutline from "../Icons/NewsPaperOutline";
import TvOutline from "../Icons/TvOutline";

const Navbar = () => {
  return (
    <nav className="relative flex h-14 px-4 py-2 items-center justify-between bg-orange-300">
      <h1 className="text-red-600 text-2xl font-bold cursor-pointer mr-4 py-1">
        SLflix
      </h1>

      <ul className="flex text-white">
        <li className="">
          <Link to="/">
            <HomeOutline />
            HOME
          </Link>
        </li>
        <li className="">
          <Link to="/">
            <FilmOutline />
            MOVIE
          </Link>
        </li>
        <li className="">
          <Link to="/">
            <TvOutline />
            TV
          </Link>
        </li>
        <li className="">
          <Link to="/">
            <NewsPaperOutline />
            NEWS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
