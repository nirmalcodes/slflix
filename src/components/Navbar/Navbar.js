import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-[1000] flex w-full items-center justify-between bg-gradient-to-b from-slate-900 via-slate-900/60 px-4 py-2 sm:bg-transparent sm:from-transparent sm:via-transparent">
      <h1 className="mr-4 flex items-center py-1 text-2xl font-bold text-red-600 sm:text-3xl">
        SLflix
      </h1>
    </div>
  );
};

export default Navbar;
