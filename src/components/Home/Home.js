import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import Loading from "../Loading/Loading";

import { useDispatch , useSelector } from "react-redux";
import { fetchAsyncMovies , fetchAsyncShows , Load} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(Load)

  const movieText = "Harry";
  const showText = "Friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <>
      {loading === true ? (<Loading/>) :
        <div>
          <div className="banner-img"></div>
          <MovieListing />
        </div>
      }
    </>
  );
};

export default Home;
