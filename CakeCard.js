import React from "react";

function CakeCard({ title }) {
  return (
    <div className="cake-card">
      <h4>{title}</h4>
      <img src="path_to_image" alt={title} style={{ width: "100%" }} />
      <p>Delicious {title} for all occasions.</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default CakeCard;
