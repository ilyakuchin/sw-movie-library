import React, { useEffect, useState } from 'react';
import './FilmCard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as liked } from '@fortawesome/free-solid-svg-icons';
import { faHeart as notLiked } from '@fortawesome/free-regular-svg-icons';
import './FilmCard.css';

interface IFilmCardProps {
  filmUrl: string;
  updateCharacters: Function;
}

interface Film {
  title: string;
  releaseDate: string;
  openingCrawl: string;
  characters: string[];
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
  const [isLike, setIsLike] = useState<boolean>(false);

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
      {isLike ? (
        <FontAwesomeIcon
          icon={liked}
          onClick={(e) => {
            e.preventDefault();
            setIsLike(false);
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={notLiked}
          onClick={(e) => {
            e.preventDefault();
            setIsLike(true);
          }}
        />
      )}

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
      {showMore && <div>{film.openingCrawl}</div>}
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
