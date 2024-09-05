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
            description={pet.description}
            isfavorite={pet.isfavorite}
            onToggleFavorites={() => onToggleFavorites(index)}
          />
        </li>
      ))}
    </ul>
  );
}

export default PetList;
