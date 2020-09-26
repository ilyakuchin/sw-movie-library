import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Charatcter from './Character';

const url: string = 'http://swapi.dev/api/people/1/';

const CharacterCard: React.FC = () => {
  const [character, setCharacter] = useState<Charatcter>({
    name: '',
    height: '',
    weight: '',
    birthdate: '',
    gender: '',
    films: [],
  });

  useEffect(() => {
    axios.get(url).then((res) => {
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
  }, []);

  return (
    <div>
      <div>Name: {character.name} </div>
      <div>Height: {character.height} </div>
      <div>Weight: {character.weight} </div>
      <div>Birthdate: {character.birthdate} </div>
      <div>Gender: {character.gender} </div>
    </div>
  );
};

export default CharacterCard;
