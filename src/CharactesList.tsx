import * as React from 'react';
import CharacterCard from './CharacterCard';
import './CharactersList.css';

interface ICharactersListProps {
  charactersUrlList: string[];
  updateFilmsUrlList: Function;
}

const CharactersList: React.FunctionComponent<ICharactersListProps> = ({
  charactersUrlList,
  updateFilmsUrlList,
}) => {
  const charactersList = charactersUrlList.map((item: string) => (
    <CharacterCard
      key={item}
      characterUrl={item}
      updateFilmsUrlList={updateFilmsUrlList}
    />
  ));

  return <div className='container'>{charactersList}</div>;
};

export default CharactersList;
