import { useState, useEffect } from 'react';
import FilmCard from '../../components/filmCard/FilmCard';
import Header from '../../components/header';
import { APIKey } from '../../config/key';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import { WrapperHome, NavHome, ShelfFilms } from './homeStyle';

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
  const [filmList, setFilmList] = useState<FilmProps[]>([]);
  const [page, setPage] = useState(1);

  function handleNextPage() {
    setPage(prevPage => prevPage + 1);
  }
  function handlePrevPage() {
    if (page === 1) {
      alert('Impossível voltar uma página');
      console.log('Ativou');
    } else {
      console.log('Avançou corretamente');
      setPage(prevPage => prevPage - 1);
    }
  }

  useEffect(() => {
    async function listFilms() {
      const response = await api.get(
        `/popular?api_key=${APIKey}&LANGUAGE=pt-BR&page=${page}`
      );
      setFilmList(response.data.results);
    }
    listFilms();
  }, [page]);

  return (
    <>
      <Header />

      <WrapperHome>
        <NavHome>
          <h1>Populares</h1>
          <div>
            <button onClick={() => handlePrevPage()}>Voltar</button>
            <button onClick={() => handleNextPage()}>Próxima página</button>
          </div>
        </NavHome>
        <ShelfFilms>
          {filmList.map(item => {
            return (
              <Link to={`/details/${item.id}`}>
                <FilmCard
                  key={item.id}
                  title={item.title}
                  backdrop_path={item.backdrop_path}
                  overview={item.overview}
                />
              </Link>
            );
          })}
        </ShelfFilms>
      </WrapperHome>
    </>
  );
}
