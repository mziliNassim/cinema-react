import React from "react";

const RecomendedMovies = () => {
  return (
    <>
      <div className="">
        <h1 className="flex items-center justify-start gap-2 my-8 text-2xl font-bold text-white">
          <i className="bi bi-stars"></i>
          <span>Artists</span>
        </h1>

        <div className="grid w-full grid-cols-1 gap-1 text-white border border-cyan-400 md:grid-cols-5">
          <span></span>
        </div>
      </div>
    </>
  );
};

export default RecomendedMovies;
