import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { APIKey } from '../../config/key';
import FilmCard from '../../components/filmCard';

import { Link } from 'react-router-dom';

import { ShelfFilms } from '../home/homeStyle';
import { WrapperSimilar } from './similarStyle';
import Header from '../../components/header';

interface FilmProps {
  id: number;
  title: string;
  vote_Average: number;
  overview: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
}

export default function Similar() {
  const { id } = useParams();

  const [listSimilar, setListSimilar] = useState<FilmProps[]>([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${APIKey}&language=pt-BR&page=1`
    )
      .then(response => response.json())
      .then(data => setListSimilar(data.results));
  });

  return (
    <WrapperSimilar>
      <Header />
      <h1>Filmes parecidos</h1>
      <ShelfFilms>
        {listSimilar.map(item => {
          return (
            <Link to={`/details/${item.id}`}>
              <FilmCard
                key={item.id}
                backdrop_path={item.backdrop_path}
                overview={item.overview}
                title={item.title}
              />
            </Link>
          );
        })}
      </ShelfFilms>
    </WrapperSimilar>
  );
}
