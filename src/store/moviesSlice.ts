import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Movie } from '../types';
import { RootState } from './index'; // Make sure RootState is imported

export const fetchMovies = createAsyncThunk<
  Movie[],
  void,
  { state: RootState }
>('movies/fetchMovies', async () => {
  const response = await axios.get<Movie[]>(
    process.env.NEXT_PUBLIC_API_URL as string,
  );
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { movies: [], favorites: [] } as {
    movies: Movie[];
    favorites: Movie[];
  },
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Movie>) => {
      const movie = action.payload;
      const index = state.favorites.findIndex((m) => m.id === movie.id);
      if (index === -1) {
        state.favorites.push(movie);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchMovies.fulfilled,
      (state, action: PayloadAction<Movie[]>) => {
        state.movies = action.payload.sort((a, b) => b.rating - a.rating);
      },
    );
  },
});

export const { toggleFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
