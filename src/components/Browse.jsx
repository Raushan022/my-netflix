import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  const user = useSelector((store) => store.user);
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      {user && (
        <>
          <Header />
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
