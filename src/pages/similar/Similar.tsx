import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { APIKey } from '../../config/key';

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
    <>
      <h1>Filmes parecidos</h1>
      {listSimilar.map(item => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.overview}</p>
          </div>
        );
      })}
    </>
  );
}
