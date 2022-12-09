import React from "react";

// https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg
// https://image.tmdb.org/t/p/original/zsgGnOBVNaI7a62uRFH0JLGTVMo.jpg

const Home = () => {
  return (
    <>
      <div className="w-full h-screen sm:h-[90vh] bg-sky-600 relative text-white">
        <div className="w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-black" />
          <img 
            src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
            alt="backdrop-poster"
            className="w-full h-full object-cover object-top hidden sm:block"
          />
          <img
            src="https://image.tmdb.org/t/p/original/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg"
            alt="backdrop-poster"
            className="w-full h-full object-cover object-top sm:hidden"
          />
        </div>
      </div>
      {/* <div className="bg-[url('https://api.lorem.space/image/car?w=1280&h=720')] w-full h-screen bg-cover bg-center bg-no-repeat"></div> */}
    </>
  );
};

export default Home;
