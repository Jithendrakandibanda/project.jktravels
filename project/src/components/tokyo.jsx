import React from "react";
import "./tokyo.css";
import "./contact"

function TravelToTokyo() {
  return (
    <div>
      <main>
        <section id="about-tokyo">
          <h2>About Tokyo</h2>
          <p>
            Tokyo, the bustling capital of Japan, is a city where traditional and modern coexist.
            From serene temples to neon-lit skyscrapers, Tokyo offers something for everyone.
          </p>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.xZiLk7RRtUqNegjIrSW1zAHaE8&pid=Api&P=0&h=220"
            alt="Tokyo Skyline"
          />
        </section>

        <section id="top-attractions">
          <h2>Top Attractions</h2>
          <ul>
            <li>Tokyo Tower</li>
            <li>Senso-ji Temple</li>
            <li>Shibuya Crossing</li>
            <li>Akihabara (Electric Town)</li>
            <li>Meiji Shrine</li>
          </ul>
        </section>
      </main>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Tokyo</h1>
          <p>Explore the vibrant culture and stunning landmarks of Japan's capital city!</p>
          <a href="./contact"><button className="cta-button">Discover More</button></a>
        </div>
      </section>

      <footer>
        <p>&copy; Travel to Tokyo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TravelToTokyo;
