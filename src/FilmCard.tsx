import React, { useEffect, useState } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import Film from './Film';
import axios from 'axios';

interface IFilmCardProps {
  filmUrl: string;
  updateCharacters: Function;
}

const FilmCard: React.FunctionComponent<IFilmCardProps> = ({
  filmUrl,
  updateCharacters,
}) => {
  const [film, setFilm] = useState<Film>({
    title: '',
    releaseDate: '',
    openingCrawl: '',
    characters: [],
  });

  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    axios.get(filmUrl).then((res) => {
      const filmRawData = res.data;

      const film: Film = {
        title: filmRawData.title,
        releaseDate: filmRawData.release_date,
        openingCrawl: filmRawData.opening_crawl,
        characters: filmRawData.characters,
      };

      setFilm(film);
    });
  }, [filmUrl]);

  return (
    <div className='card'>
      <div>
        <b>{film.title}</b>
      </div>
      {showMore ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowMore(false);
          }}
        >
          Show less
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowMore(true);
          }}
        >
          Show more
        </button>
      )}
      {showMore ? <div>{film.openingCrawl}</div> : <div></div>}
      <div>
        <b>Release Date:</b> {film.releaseDate}
      </div>
      <Link
        to='/characters'
        onClick={() => {
          updateCharacters(film.characters);
        }}
      >
        Characters
      </Link>
    </div>
  );
};

export default FilmCard;
