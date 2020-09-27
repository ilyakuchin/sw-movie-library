import * as React from 'react';
import CharacterCard from './CharacterCard';

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

  return <div>{charactersList}</div>;
};

export default CharactersList;
