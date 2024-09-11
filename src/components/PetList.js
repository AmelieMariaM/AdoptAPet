import React from "react";
import Pet from "./Pet";
import "../style/PetList.css";

function PetList({ list, onToggleFavorites }) {
  return (
    <ul>
      {list.map((pet, index) => (
        <li key={index}>
          <Pet
            photo={pet.photo}
            name={pet.name}
            species={pet.species}
            location={pet.location}
            description={pet.description}
            isfavorite={pet.isfavorite}
            sos={pet.sos}
            onToggleFavorites={() => onToggleFavorites(index)}
          />
        </li>
      ))}
    </ul>
  );
}

export default PetList;
