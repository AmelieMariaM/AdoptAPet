import PetList from "./PetList";
import Header from "./Header";
import Filter from "./Filter";
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
  const initialPets = [
    {
      photo: petPhoto1,
      name: "Bella",
      species: "Dog",
      location: "Paris",
      description:
        "Cute mama bear Cute mama bear Cute mama bear Cute mama bear Cute mama bear Cute mama bear Cute mama bear",
      isfavorite: true,
    },
    {
      photo: petPhoto2,
      name: "Pongo",
      species: "Dog",
      location: "Paris",
      description:
        "Adorable staffie puppy. There is a house in New Orleans. Quisque euismod, vel viverra nisi justo non sapien.",
      isfavorite: true,
    },
    {
      photo: petPhoto3,
      name: "Kuzco",
      species: "Dog",
      location: "Paris",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isfavorite: false,
    },
    {
      photo: petPhoto4,
      name: "Jacob",
      species: "Werewolf",
      location: "Forks",
      description:
        "Gorgeous baby. Fusce auctor orci atu orci luctus et ultrices posuere.",
      isfavorite: false,
    },
    {
      photo: petPhoto5,
      name: "Angel",
      species: "angel",
      location: "London",
      description: "Adorable staffie puppy",
      isfavorite: true,
    },
    {
      photo: petPhoto6,
      name: "Bestie",
      species: "Dog",
      location: "Amsterdam",
      description: "Sed vel tristique magna. Nam maximus sit amet eu dolor. ",
      isfavorite: true,
    },
    {
      photo: petPhoto7,
      name: "Love",
      species: "Cat",
      location: "Istanbul",
      description: "Cute aggression",
      isfavorite: true,
    },
  ];

  const [pets, setPets] = useState(initialPets); // État pour la liste des animaux filtrés
  const [originalPets] = useState(initialPets); // État pour conserver la liste complète et initiale
  const [searchQuery, setSearchQuery] = useState(""); // Terme de recherche
  const [filter, setFilter] = useState(""); // Catégorie de filtrage

  const handleSearchQuery = (value) => {
    setSearchQuery(value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };
  // Fonction de gestion des filtres
  function applyFilters() {
    let filteredList = originalPets; // Utilisez la liste originale comme point de départ
    if (searchQuery) {
      filteredList = filteredList.filter(
        (pet) =>
          pet.species?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pet.location?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filter) {
      filteredList = filteredList.filter((pet) => {
        if (filter === "location") {
          return pet.location
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase());
        } else if (filter === "species") {
          return pet.species?.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return true;
      });
    }

    setPets(filteredList);
    setSearchQuery("");
  }
  // Fonction de gestion des favoris
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
      <Filter
        handleSearchQuery={handleSearchQuery}
        handleFilterChange={handleFilterChange}
        applyFilters={applyFilters}
        searchQuery={searchQuery}
      />
      <PetList list={pets} onToggleFavorites={toggleFavorites} />
    </div>
  );
}

export default App;
