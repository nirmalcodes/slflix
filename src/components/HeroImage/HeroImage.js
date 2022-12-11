import React from "react";

const HeroImage = ({ posterImg, backdropImg, imageAlt }) => {
  return (
    <>
      {posterImg && (
        <img
          src={`https://image.tmdb.org/t/p/original/${posterImg}`}
          alt={imageAlt}
          className="absolute top-0 left-0 h-full w-full object-cover object-top sm:hidden"
        />
      )}
      {backdropImg && (
        <img
          src={`https://image.tmdb.org/t/p/original/${backdropImg}`}
          alt={imageAlt}
          className="absolute top-0 left-0 hidden h-full w-full object-cover object-top sm:block"
        />
      )}
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent sm:top-0 sm:h-full sm:bg-gradient-to-r sm:via-transparent" />
    </>
  );
};

export default HeroImage;
