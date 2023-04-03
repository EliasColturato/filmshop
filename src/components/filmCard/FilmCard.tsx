import { WrapperCard, CardTitle } from './filmCardStyle';

export default function FilmCard({
  key,
  title,
  backdrop_path,
  overview,
}: {
  key: number;
  title: string;
  backdrop_path: string;
  overview: string;
}) {
  const image_path = 'https://image.tmdb.org/t/p/w500';

  return (
    <WrapperCard key={key}>
      <CardTitle>
        <h1>{title}</h1>
        <p>Ver detalhes</p>
      </CardTitle>
      <img src={`${image_path}${backdrop_path}`} alt={title} />
      <p>{overview}</p>
    </WrapperCard>
  );
}
