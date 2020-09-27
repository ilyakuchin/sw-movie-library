import React, { useState, useEffect } from 'react';
import FilmsList from './FilmsList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Film from './Film';
import CharactersList from './CharactesList';

const App: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [characters, setCharacters] = useState<string[]>([]);
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

  return (
    <Router>
      <div>Filters</div>
      <Switch>
        <Route exact path='/'>
          <FilmsList films={films} updateCharacters={setCharacters} />
        </Route>
        <Route path='/characters'>
          <CharactersList charactersUrlList={characters} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
