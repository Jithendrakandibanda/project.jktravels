import React from "react";
import "./paris.css";
import "./contact";

function TravelToParis() {
  return (
    <div>
      <main>
        <section id="about-paris">
          <h2>About Paris</h2>
          <p>
            Paris, the capital of France, is known for its art, fashion,
            gastronomy, and culture. The city's 19th-century cityscape is
            crisscrossed by wide boulevards and the River Seine.
          </p>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.adYGjfEwLEmp8jU8cgT_LwHaFj&pid=Api&P=0&h=220"
            alt="The Eiffel Tower, an iconic landmark in Paris"
          />
        </section>

        <section id="top-attractions">
          <h2>Top Attractions</h2>
          <ul>
            <li>The Eiffel Tower</li>
            <li>The Louvre Museum</li>
            <li>Notre-Dame Cathedral</li>
            <li>Montmartre</li>
            <li>Champs-Élysées and Arc de Triomphe</li>
          </ul>
        </section>
      </main>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Paris</h1>
          <p>Discover the beauty, romance, and culture of the City of Light!</p>
          <a href=".\contact"><button className="cta-button">Discover More</button></a>
        </div>
      </section>

      <footer>
        <p>&copy; Travel to Paris. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TravelToParis;
