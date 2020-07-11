import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page:</h1>
        {movies.map((movie, index) => (
          
          <div key={index}>
             <h3>Title: {movie.title}</h3>
            <p>Time: {movie.time}</p>
         <p>Meta Score: {movie.metascore ?  movie.metascore : "Does Not Exist"}</p>
         <ul>
           Genres:
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
         </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
