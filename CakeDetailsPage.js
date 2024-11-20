import React from "react";
import { useParams } from "react-router-dom";

function CakeDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h2>Cake Details - {id}</h2>
      <p>Ingredients, flavors, and price details go here.</p>
      <select>
        <option>Size - Small</option>
        <option>Size - Medium</option>
        <option>Size - Large</option>
      </select>
      <button>Add to Cart</button>
    </div>
  );
}

export default CakeDetailsPage;
