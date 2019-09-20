import React, { useEffect, useState } from "react";

import axios from "axios";

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ character, setCharacter ] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const character = response.data.results;
      console.log("response", response.data.results);
      setCharacter(character);
    });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      
      {character.map(characters => {

        return (
          <CharacterCard
          name={characters.name}
          gender={characters.gender}
          species={characters.species}
          status={characters.status}
          image={characters.image}
          />
        );
      })}


    </section>
  );
}
