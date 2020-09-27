import React from 'react';
import Film from './Film';

import FilmCard from './FilmCard';
import './FilmsList.css';

interface IFilmsListProps {
  films: Film[];
  updateCharacters: Function;
}

const FilmsList: React.FunctionComponent<IFilmsListProps> = ({
  films,
  updateCharacters,
}) => {
  const filmsList = films.map((item: Film) => (
    <FilmCard
      key={item.title}
      title={item.title}
      openingCrawl={item.openingCrawl}
      releaseDate={item.releaseDate}
      characters={item.characters}
      updateCharacters={updateCharacters}
    />
  ));

  return <div className='container'>{filmsList}</div>;
};

export default FilmsList;
