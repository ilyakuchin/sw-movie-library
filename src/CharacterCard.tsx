import React, { useEffect, useState } from 'react';
import Character from './Character';
import axios from 'axios';

interface ICharacterCard {
  characterUrl: string;
}

const CharacterCard: React.FC<ICharacterCard> = ({ characterUrl }) => {
  const [character, setCharacter] = useState<Character>({
    name: '',
    height: '',
    weight: '',
    birthdate: '',
    gender: '',
    films: [],
  });
  useEffect(() => {
    axios.get(characterUrl).then((res) => {
      const character = res.data;

      setCharacter({
        name: character.name,
        height: character.height,
        weight: character.mass,
        birthdate: character.birth_year,
        gender: character.gender,
        films: character.films,
      });
    });
  }, [characterUrl]);

  return (
    <div>
      <div>Name: {character.name} </div>
      <div>Height: {character.height} </div>
      <div>Weight: {character.weight} </div>
      <div>Birthdate: {character.birthdate} </div>
      <div>Gender: {character.gender} </div>
      <div>Films</div>
    </div>
  );
};

export default CharacterCard;
