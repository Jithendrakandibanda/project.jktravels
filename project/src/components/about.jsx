import React from "react";
import "./about.css";

const tin = () => {
  const travelData = {
    name: "JK Travel",
    description:
      "Your gateway to amazing journeys! We specialize in offering personalized travel packages and exceptional customer service. Explore the world with us!",
    contact: {
      phone: "+01 1234567890",
      email: "contact@jktravel.com",
      location: "Worldwide",
    },
    services: ["Destination Planning", "Tour Packages", "Travel Assistance"],
    socialLinks: {
      facebook: "https://facebook.com/jktravel",
      instagram: "https://instagram.com/jktravel",
      twitter: "https://twitter.com/jktravel",
    },
  };

  return (
    <div className="travel-note">
      <header className="header">
        <h1>{travelData.name}</h1>
        <p>{travelData.description}</p>
      </header>

      <section className="contact-info">
        <h3>Contact Info:</h3>
        <ul>
          <li>📞 {travelData.contact.phone}</li>
          <li>📧 {travelData.contact.email}</li>
          <li>📍 {travelData.contact.location}</li>
        </ul>
      </section>

      <section className="services">
        <h3>Our Services:</h3>
        <ul>
          {travelData.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="social-links">
        <h3>Follow Us:</h3>
        <ul>
          <li>
            <a
              href={travelData.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href={travelData.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default tin;
