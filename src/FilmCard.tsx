import * as React from 'react';
import Film from './Film';

const FilmCard: React.FunctionComponent<Film> = ({
  title,
  openingCrawl,
  releaseDate,
  characters,
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{openingCrawl}</div>
      <div>{releaseDate}</div>
      <div>Characters</div>
    </div>
  );
};

export default FilmCard;
