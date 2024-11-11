// src/hooks/useStarships.ts
import { useQuery } from 'react-query';

interface Starship {
  name: string;
  model: string;
}

interface StarshipsData {
  results: Starship[];
}

const fetchStarships = async (): Promise<StarshipsData> => {
  const response = await fetch('https://swapi.dev/api/starships/?page=1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useStarships = () => {
  return useQuery<StarshipsData, Error>('starships', fetchStarships);
};