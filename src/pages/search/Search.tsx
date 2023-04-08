import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { APIKey } from '../../config/key';
import FilmCard from '../../components/filmCard';
import { Link } from 'react-router-dom';

import { WrapperSearch, NavSearch, ContentSearch } from './searchStyle';
import { ShelfFilms } from '../home/homeStyle';

interface FilmProps {
  id: number;
  title: string;
  vote_Average: number;
  overview: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const [listMovies, setListMovies] = useState<FilmProps[]>([]);
  const query = searchParams.get('q');
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${query}&language=pt-BR&page=1&include_adult=false`
    )
      .then(response => response.json())
      .then(data => setListMovies(data.results));
  });

  return (
    <WrapperSearch>
      <NavSearch>
        <Link to={'/'}>
          <button>Voltar</button>
        </Link>
        <ContentSearch>
          <p>Resultados para:</p>
          <h1>{query}</h1>
        </ContentSearch>
      </NavSearch>
      <ShelfFilms>
        {listMovies &&
          listMovies.map(item => {
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
    </WrapperSearch>
  );
}
