import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  //declaring a state variable to apply debounce function in input search
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  //If the searchQuery is present in my searchCache then I should make an api call and update in my cache
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
      getSearchSuggestions()
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * 
   * -if we press key 'i'
   * -render the component
   * -useEffect()
   * -start timer => make an api call after 200ms
   * 
   * -if we press key 'ip'
   * -destroy the component(useEffect return method)
   * -again rerender the component
   * -useEffect()
   * -start timer => make an api call after 200ms
   * -setTimeout(200) new timer is setup and after every click it tries clear up the timer and automatically make an api call
   * 
   * 
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //after making an api call I will setSuggestions and map on the suggestions below in ul li
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
      [searchQuery]: json[1],
     })
    );
  };

  

  //Dispatch an action and let's call toggleMenu inside our dispatch
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          //we have our search query
          value = {searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          //when we type text in searchbar it show suggestion
          onFocus = {() => setShowSuggestions(true)}
          //when we come out of search text it won't show suggestion
          onBlur = {() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
        </div>
        {showSuggestions && (
      <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
        <ul>
          {suggestions.map((s) => (
          <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
            🔍{s}
          </li>
          ))}
        </ul>
      </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
      </div>
    </div>
  );
};

export default Head;
