import React from "react";

const HeroImage = ({ posterImg, backdropImg, imageAlt }) => {
  return (
    <>
      {posterImg && (
        <img
          src={`https://image.tmdb.org/t/p/original/${posterImg}`}
          alt={imageAlt}
          className="absolute top-0 left-0 z-[6] h-full w-full object-cover object-top sm:hidden"
        />
      )}
      {backdropImg && (
        <img
          src={`https://image.tmdb.org/t/p/original/${backdropImg}`}
          alt={imageAlt}
          className="absolute top-0 left-0 z-[6] hidden h-full w-full object-cover object-top sm:block"
        />
      )}
      <div className="absolute bottom-0 left-0 z-[7] h-3/5 w-full bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/90 sm:top-0 sm:h-full sm:w-2/3 sm:bg-gradient-to-r sm:from-[#0f0f0f]/60 sm:via-[#0f0f0f]/40" />
    </>
  );
};

export default HeroImage;
