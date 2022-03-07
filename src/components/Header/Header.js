import React , {useState} from "react";
import { useDispatch } from "react-redux";
import {fetchAsyncMovies , fetchAsyncShows} from './../../features/movies/movieSlice'
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {

  const [search, setSearch] = useState('')
  const dispatch = useDispatch();
  
  const Submit = (e) => {
    if ( search === '') {
      return alert('Please enter a text in the search field')
    }
    e.preventDefault()
    dispatch(fetchAsyncMovies(search))
    dispatch(fetchAsyncShows(search))
    setSearch('')
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">My Movie App</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={Submit}>
          <input type='text' placeholder="Search Movies or Shows" value={search} onChange={ (e) => setSearch(e.target.value)}/>
          <button type='submit'><i className="fa fa-search"></i></button>
        </form>
      </div>
      <Link to="/login">
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
