import axios, { type AxiosResponse } from 'axios';
import type { Movie } from '../types/movie';

export interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (
  query: string,
  page: number,
): Promise<FetchMoviesResponse> => {
  const response: AxiosResponse<FetchMoviesResponse> = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  );

  return response.data;
};
