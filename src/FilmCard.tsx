import * as React from 'react';
import Film from './Film';
import './FilmCard.css';

const FilmCard: React.FunctionComponent<Film> = ({
  title,
  openingCrawl,
  releaseDate,
  characters,
}) => {
  return (
    <div className='card'>
      <div>
        <b>{title}</b>
      </div>
      <div>{openingCrawl}</div>
      <div>
        <b>Release Date:</b> {releaseDate}
      </div>
      <a href='#'>Characters</a>
    </div>
  );
};

export default FilmCard;
