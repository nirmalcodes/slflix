import React, { useEffect, useState } from "react";
import requests from "../../Requests";
import axios from "axios";
import HeroImage from "../../components/HeroImage/HeroImage";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // const getLogo = () => {};

  // const movie = movies[Math.floor(Math.random() * movies.length)];

  console.log(movies);
  // console.log("random movie ", movie);

  return (
    <div className="relative h-screen w-full bg-slate-900">
      <HeroImage
        posterImg={movies[5]?.poster_path}
        backdropImg={movies[5]?.backdrop_path}
        imageAlt={movies[5]?.title}
      />
      <div className="">
        <h1 className=""></h1>
        <p className=""></p>
      </div>
    </div>
  );
};

export default Home;
