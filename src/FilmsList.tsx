import React, { useState, useEffect } from 'react';
import Film from './Film';
import axios from 'axios';
import FilmCard from './FilmCard';
import './FilmsList.css';

const FilmsList: React.FunctionComponent = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const url = 'http://swapi.dev/api/films/';

  const mapRawFilmsDataToFilmsList = (
    rawFilmsList: {
      title: any;
      release_date: any;
      opening_crawl: any;
      characters: any;
    }[]
  ) =>
    rawFilmsList.map((item) => {
      return {
        title: item.title,
        releaseDate: item.release_date,
        openingCrawl: item.opening_crawl,
        characters: item.characters,
      };
    });

  useEffect(() => {
    axios.get(url).then((res) => {
      const rawFilmsData = res.data.results;
      const films: Film[] = mapRawFilmsDataToFilmsList(rawFilmsData);

      setFilms(films);
    });
  }, []);

  const filmsList = films.map((item: Film) => (
    <FilmCard
      title={item.title}
      openingCrawl={item.openingCrawl}
      releaseDate={item.releaseDate}
      characters={item.characters}
    />
  ));

  return <div className='container'>{filmsList}</div>;
};

export default FilmsList;
