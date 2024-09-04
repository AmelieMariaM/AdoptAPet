import PetList from "./components/PetList";
import petPhoto from "./components/Images/5.jpeg";
import { useState } from "react";
import "./style/App.css";

function App() {
  const [pets, setPets] = useState([
    {
      photo: { petPhoto },
      name: "Angel",
      description: "Adorable staffie puppy",
      isfavorite: true,
    },
    {
      photo: { petPhoto },
      name: "Angel",
      description: "Adorable staffie puppy",
      isfavorite: true,
    },
    {
      photo: { petPhoto },
      name: "Angel",
      description: "Adorable staffie puppy",
      isfavorite: false,
    },
    {
      photo: { petPhoto },
      name: "Angelita",
      description: "Gorgeous baby",
      isfavorite: false,
    },
    {
      photo: { petPhoto },
      name: "Angel",
      description: "Adorable staffie puppy",
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
      <PetList list={pets} onToggleFavorites={toggleFavorites} />
    </div>
  );
}

export default App;
