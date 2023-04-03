import { useEffect, useState } from 'react';
import { APIKey } from '../../config/key';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import { WrapperDetail, NavDetail, WrapperCardDetail } from './styleDetails';

interface FilmProps {
  id: number;
  title: string;
  vote_Average: number;
  overview: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
}

export default function Details() {
  const image_path = 'https://image.tmdb.org/t/p/w500';
  const [filmDetails, setFilmDetail] = useState<FilmProps>({
    id: 0,
    title: '',
    vote_Average: 0,
    overview: '',
    poster_path: '',
    release_date: '',
    backdrop_path: '',
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR`
    )
      .then(response => response.json())
      .then(data => setFilmDetail(data));
  }, []);
  const linkTrailer = `https://www.youtube.com/results?search_query=${filmDetails.title}+Trailer+Dublado`;

  return (
    <WrapperDetail>
      <NavDetail>
        <h1>{filmDetails.title}</h1>
      </NavDetail>
      <WrapperCardDetail>
        <img
          src={`${image_path}${filmDetails.poster_path}`}
          alt={`${filmDetails.title}`}
        />
        <div>
          <p>{filmDetails.overview}</p>
          <button>
            <a href={`${linkTrailer}`} target="_blank" rel="noreferrer">
              Trailer
            </a>
          </button>
          <Link to={`/similar/${filmDetails.id}`}>
            <button>Filmes parecidos</button>
          </Link>
          <button>Adicionar ao carrinho</button>
        </div>
      </WrapperCardDetail>
    </WrapperDetail>
  );
}
