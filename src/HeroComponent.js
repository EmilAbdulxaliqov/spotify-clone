import React from "react";
import "./HeroComponent.css";

export default function HeroComponent() {
  return (
    <section className="hero-component">
      <div className="container">
        <h1 className="first">Listening is everything</h1>
      </div>
      <p className="text">
        Millions of songs and podcasts. No credit card needed.
      </p>
      <button>GET SPOTIFY FREE</button>
    </section>
  );
}
