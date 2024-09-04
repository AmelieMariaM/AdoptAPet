import React from "react";
import "../style/Pet.css";
import UnlikeButton from "@mui/icons-material/Favorite";
import LikeButton from "@mui/icons-material/FavoriteBorder";
function Pet({ photo, name, description, isfavorite, onToggleFavorites }) {
  const faveClass = isfavorite ? "unlike" : "like";

  return (
    <div>
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button className={faveClass} onClick={onToggleFavorites}>
        {isfavorite ? <UnlikeButton /> : <LikeButton />}
      </button>
    </div>
  );
}

export default Pet;
