import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/moviesSlice';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  isFavorite: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isFavorite }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(toggleFavorite(movie));
  };

  return (
    <div
      className="movie-card p-4 border rounded-lg shadow-lg cursor-pointer"
      onClick={() => (window.location.href = movie.imdb_url)}
    >
      <img src={movie.image} alt={movie.movie} className="w-full h-auto mb-4" />
      <h2 className="text-lg font-bold">{movie.movie}</h2>
      <p>Rating: {movie.rating}</p>
      <div onClick={handleFavoriteClick} className="mt-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isFavorite ? 'red' : 'none'}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default MovieCard;
