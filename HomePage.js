import React from "react";
import CakeCard from "../components/CakeCard";

function HomePage() {
  return (
    <div>
      <h2>Welcome to Our Cake Shop</h2>
      <p>Discover our delicious range of cakes, specially made for every occasion!</p>
      <div className="featured-cakes">
        <h3>Featured Cakes</h3>
        <div className="cake-list">
          <CakeCard title="Chocolate Cake" />
          <CakeCard title="Fruit Cake" />
          <CakeCard title="Vanilla Cake" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
