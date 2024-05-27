'use client';

import React from 'react';
import FavoriteMoviesList from '../../components/FavoriteMoviesList';

const Favorites: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Favorite Movies</h1>
      <FavoriteMoviesList />
    </div>
  );
};

export default Favorites;
