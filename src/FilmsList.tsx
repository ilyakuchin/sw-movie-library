import React from 'react';

import FilmCard from './FilmCard';
import './FilmsList.css';

interface IFilmsListProps {
  filmsUrlList: string[];
  updateCharacters: Function;
}

const FilmsList: React.FunctionComponent<IFilmsListProps> = ({
  filmsUrlList: films,
  updateCharacters,
}) => {
  const filmsList = films.map((item: string) => (
    <FilmCard key={item} filmUrl={item} updateCharacters={updateCharacters} />
  ));

  return <div className='container'>{filmsList}</div>;
};

export default FilmsList;
