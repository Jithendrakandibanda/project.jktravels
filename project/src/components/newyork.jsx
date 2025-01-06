import React from "react";
import "./newyorkstyles.css";
import "./contact"

function TravelToNewYork() {
  return (
    <div>
      <main>
        <section id="about-nyc">
          <h2>About New York City</h2>
          <p>
            New York City, the largest city in the United States, is a global hub of culture,
            finance, and entertainment. From Times Square to Central Park, NYC offers endless
            attractions.
          </p>
          <img
            src="https://media.architecturaldigest.com/photos/5cdadfa704c41e74349a8438/master/pass/GettyImages-931933966.jpg"
            alt="New York City Skyline"
            height="200"
            width="200"
          />
        </section>

        <section id="top-attractions">
          <h2>Top Attractions</h2>
          <ul>
            <li>Statue of Liberty</li>
            <li>Times Square</li>
            <li>Central Park</li>
            <li>Empire State Building</li>
            <li>Brooklyn Bridge</li>
          </ul>
        </section>
      </main>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to New York</h1>
          <p>Experience the energy, diversity, and iconic landmarks of the Big Apple!</p>
          <a href="./contact"><button className="cta-button">Discover More</button></a>
        </div>
      </section>

      <footer>
        <p>&copy; Travel to New York. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TravelToNewYork;
