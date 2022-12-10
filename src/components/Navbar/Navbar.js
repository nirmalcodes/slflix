import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-[1000] flex w-full items-center justify-between py-2 px-4">
      <h1 className="mr-4 cursor-pointer py-1 text-3xl font-bold text-red-600 sm:text-4xl">
        SLflix
      </h1>
      <div className="">
        <button className="rounded bg-red-600 py-2 px-4 text-white">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
