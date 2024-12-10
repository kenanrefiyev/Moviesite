import './Moviecard.css';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaBars } from "react-icons/fa";
import Moviecard from './Moviecard';

function Navbar() {
  const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=fa1192549721df01a1fb28a7788e6608';
  const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=fa1192549721df01a1fb28a7788e6608&query='; // Dəyişdirildi
  
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState(''); 

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (term.trim() === '') {
      
      fetch(API_URL)
        .then(res => res.json())
        .then(data => setMovies(data.results));
    } else {
      
      fetch(API_SEARCH + encodeURIComponent(term)) 
        .then(res => res.json())
        .then(data => setMovies(data.results));
    }
  };

  return (
    <div>
      <div>
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-baseline">
          <div className="flex items-center space-x-2">
            <span className="text-2xl italic">MUSTSEE</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#movies" className="hover:text-green-400">Movies</a>
            <a href="#lists" className="hover:text-gray-300">Lists</a>
            <div className="relative">
              <form className="flex items-center" onSubmit={handleSearch}>
                <input
                  placeholder="Search..."
                  className="bg-gray-800 text-white rounded-full pl-4 pr-10 py-2 focus:outline-none"
                  onChange={(e) => setTerm(e.target.value)}
                />
                <FaSearch className="absolute right-3 text-gray-400" />
              </form>
            </div>
            <div className="relative">
              <i className="fas fa-bell"></i>
            </div>
            <button>
              <FaBars />
            </button>
          </div>
        </nav>
      </div>

      <div className="Movies grid grid-cols-4 gap-6 p-4">
        {movies.map((movie) => (
          <Moviecard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
