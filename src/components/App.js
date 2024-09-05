import PetList from "./PetList";
import Header from "./Header";
import petPhoto1 from "./Images/1.jpeg";
import petPhoto2 from "./Images/2.jpeg";
import petPhoto3 from "./Images/3.jpeg";
import petPhoto4 from "./Images/4.jpeg";
import petPhoto5 from "./Images/5.jpeg";
import petPhoto6 from "./Images/6.jpeg";
import petPhoto7 from "./Images/7.jpeg";
import { useState } from "react";
import "../style/App.css";

function App() {
  const [pets, setPets] = useState([
    {
      photo: petPhoto1,
      name: "Bella",
      description: "Cute mama bear",
      isfavorite: true,
    },
    {
      photo: petPhoto2,
      name: "Pongo",
      description:
        "Adorable staffie puppy. Quisque euismod, vel viverra nisi justo non sapien.",
      isfavorite: true,
    },
    {
      photo: petPhoto3,
      name: "Kuzco",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isfavorite: false,
    },
    {
      photo: petPhoto4,
      name: "Jacob",
      description:
        "Gorgeous baby. Fusce auctor orci atu orci luctus et ultrices posuere.",
      isfavorite: false,
    },
    {
      photo: petPhoto5,
      name: "Angel",
      description: "Adorable staffie puppy",
      isfavorite: true,
    },
    {
      photo: petPhoto6,
      name: "Bestie",
      description: "Sed vel tristique magna. Nam maximus sit amet eu dolor. ",
      isfavorite: true,
    },
    {
      photo: petPhoto7,
      name: "Love",
      description: "Cute aggression",
      isfavorite: true,
    },
  ]);

  function toggleFavorites(index) {
    console.log("État des animaux avant la mise à jour :", pets);
    const updatedPets = pets.map((pet, i) =>
      i === index ? { ...pet, isfavorite: !pet.isfavorite } : pet
    );
    console.log("État des animaux après la mise à jour :", updatedPets);
    setPets(updatedPets);
  }

  return (
    <div className="App">
      <Header />
      <PetList list={pets} onToggleFavorites={toggleFavorites} />
    </div>
  );
}

export default App;
