import { useState, useEffect } from 'react';
import Header from '../../components/header';
import { APIKey } from '../../config/key';
import api from '../../services/api';

import { WrapperHome } from './homeStyle';

interface FilmProps {
  id: number;
  title: string;
  vote_Average: number;
  overview: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
}

export default function Home() {
  const image_path = 'https://image.tmdb.org/t/p/w500';
  const [filmList, setFilmList] = useState<FilmProps[]>([]);

  useEffect(() => {
    async function listFilms() {
      const response = await api.get(
        `/popular?api_key=${APIKey}&LANGUAGE=pt-BR&page=1`
      );
      setFilmList(response.data.results);
    }
    listFilms();
  }, []);

  return (
    <>
      <Header />
      <WrapperHome>
        {/* <h1>Home page</h1>
      {filmList.map(item => {
        return (
          <div key={item.id}>
          <img src={`${image_path}/${item.backdrop_path}`} alt="" />
          <p>{item.title}</p>
          </div>
          );
        })} */}
      </WrapperHome>
    </>
  );
}
