import React, { useState, useEffect } from 'react';
import Film from './Film';
import axios from 'axios';

const FilmsList: React.FunctionComponent = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const url = 'http://swapi.dev/api/films/';

  useEffect(() => {
    axios.get(url).then((res) => {
      const results = res.data.results;

      const films: Film[] = results.map(
        (item: {
          title: any;
          release_date: any;
          opening_crawl: any;
          characters: any;
        }) => {
          return {
            title: item.title,
            releaseDate: item.release_date,
            openingCrawl: item.opening_crawl,
            characters: item.characters,
          };
        }
      );

      setFilms(films);
    });
  }, []);

  const filmsList = films.map((item) => (
    <div key={item.title}>
      <div>{item.title}</div>
      <div>{item.openingCrawl}</div>
      <div>{item.releaseDate}</div>
      <div>Characters</div>
    </div>
  ));

  return <div>{filmsList}</div>;
};

export default FilmsList;
