import * as React from 'react';
import CharacterCard from './CharacterCard';

interface ICharactersListProps {
  charactersUrlList: string[];
}

const CharactersList: React.FunctionComponent<ICharactersListProps> = ({
  charactersUrlList,
}) => {
  const charactersList = charactersUrlList.map((item: string) => (
    <CharacterCard key={item} characterUrl={item} />
  ));

  return <div>{charactersList}</div>;
};

export default CharactersList;
