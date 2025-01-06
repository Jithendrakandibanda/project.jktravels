import React from "react";
import { Link } from "react-router-dom";
import "./tokyo.css";
import Newyork from'./newyork';
import Paris from './paris';
import Tokyo from './tokyo';

const Navbar = () => {
  return (
    <div className="nav">
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.do-MpmtBaDcmzjWcjuyKkgHaDI&pid=Api&P=0&h=220"
        height="40px"
        width="80px"
        alt="JK Travel Logo"
      />
        JK Travel
    </div>
  );
};

const HomeSection = () => {
  return (
    <section id="home">
      <h2>Welcome to Our Travel Site</h2>
      <p>
        Your adventure starts here. Discover amazing places around the world.
      </p>
    </section>
  );
};

const Destination = ({ id, title, imgSrc, description, link }) => {
  return (
    <div
      className="destination"
      onClick={() => console.log(`Show details for ${id}`)}
    >
      <h3 id={`${id}1`}>{title}</h3>
      <a href={link}>
        <img src={imgSrc} alt={title} height="200px" width="200px" />
      </a>
      <p>{description}</p>
    </div>
  );
};

const DestinationsSection = () => {
  return (
    <section id="destinations">
      <h2>Popular Destinations</h2>
      <a href ="\paris"><Destination
        id="paris"
        title="Paris"
        imgSrc="https://static01.nyt.com/images/2023/07/01/travel/22hours-paris-tjzf/22hours-paris-tjzf-videoSixteenByNine3000.jpg"
        description="The City of Light"
        
      /></a>
      <a href="\tokyo"><Destination
        id="tokyo"
        title="Tokyo"
        imgSrc="https://tse4.mm.bing.net/th?id=OIP.a-Q7r6xu1L2zL9nSb5AsogHaE8&pid=Api&P=0&h=220"
        description="The bustling capital of Japan"
        href="\tokyo"
      /></a>
      <a href="\newyork"><Destination
        id="newyork"
        title="New York"
        imgSrc="https://tse1.mm.bing.net/th?id=OIP.YXENm9ugpcnkTD4qCaTItwHaEK&pid=Api&P=0&h=220"
        description="The Big Apple"
        /></a>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about">
      <h2>About Us</h2>
      <p>
        We are passionate about travel and sharing our experiences with you.
      </p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p id="ll">&copy; Travel Website</p>
    </footer>
  );
};

const Apps = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <DestinationsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Apps;
