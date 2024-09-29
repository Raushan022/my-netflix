import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      -Main Container
        -VideoBackground
        -Video Title
      -Secondary Container
        -Movie List * n
          -Cards * n
       */}
    </>
  );
};

export default Browse;
