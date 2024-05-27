'use client';

import MovieList from '@/components/MovieList';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Movie List</h1>
      <MovieList />
    </div>
  );
}
