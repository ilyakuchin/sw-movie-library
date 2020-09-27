import * as React from 'react';
import './FilmCard.css';
import { Link } from 'react-router-dom';

interface IFilmCardProps {
  title: string;
  openingCrawl: string;
  releaseDate: string;
  characters: string[];
  updateCharacters: Function;
}

const FilmCard: React.FunctionComponent<IFilmCardProps> = ({
  title,
  openingCrawl,
  releaseDate,
  characters,
  updateCharacters,
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
      <Link
        to='/characters'
        onClick={() => {
          updateCharacters(characters);
        }}
      >
        Characters
      </Link>
    </div>
  );
};

export default FilmCard;
