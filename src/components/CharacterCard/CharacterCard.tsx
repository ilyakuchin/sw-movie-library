import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.css';
import axios from 'axios';

interface Character {
  name: string;
  height: string;
  weight: string;
  birthdate: string;
  gender: string;
  films: string[];
}

interface ICharacterCard {
  characterUrl: string;
  updateFilmsUrlList: (films: string[]) => void;
}

const CharacterCard: React.FC<ICharacterCard> = ({
  characterUrl,
  updateFilmsUrlList,
}) => {
  const [character, setCharacter] = useState<Character | null>(null);
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
      {character ? (
        <div className='card'>
          <div>Name: {character.name} </div>
          <div>Height: {character.height} </div>
          <div>Weight: {character.weight} </div>
          <div>Birthdate: {character.birthdate} </div>
          <div>Gender: {character.gender} </div>
          <Link to='/' onClick={() => updateFilmsUrlList(character.films)}>
            Films
          </Link>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default CharacterCard;
