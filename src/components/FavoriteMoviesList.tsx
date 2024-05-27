'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import MovieCard from './MovieCard';

const FavoriteMoviesList: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.movies.favorites);

  return (
    <div className="favorite-movies-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {favorites.length === 0 ? (
        <div>No Favourites</div>
      ) : (
        favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isFavorite={true} />
        ))
      )}
    </div>
  );
};

export default FavoriteMoviesList;
