import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchMovies } from '../store/moviesSlice';
import { Movie } from '../types';
import MovieCard from './MovieCard';

const MovieList: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const favorites = useSelector((state: RootState) => state.movies.favorites);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="movie-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.some((fav: Movie) => fav.id === movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;
