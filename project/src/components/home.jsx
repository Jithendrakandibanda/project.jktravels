import React from "react";
import "./home.css"; 
import { Link } from "react-router-dom";
import './tours';

const dog= () => {
  return (
    <div>
      <header className="top-header">
        <div className="contact-info"></div>
        <div className="logo-menu">
          <div className="logo">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.do-MpmtBaDcmzjWcjuyKkgHaDI&pid=Api&P=0&h=220"
              height="40px"
              alt="JK Travel Logo"
            />
            <span className="hit">JK Travel</span>
          </div>
          <nav className="menu">
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="\tours" >Tour</a>
              </li>
              <li>
                <a href="\about">ABOUT</a>
              </li>
              <li>
                <a href="\contact">CONTACT</a>
              </li>
            </ul>
          </nav>
          <div className="auth-search">
            <a href="#">LOGIN</a>
            <a href="\sigup">SIGN UP</a>
            <a href="#">🔍</a>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Explore the World with <span>JK Travel</span>
          </h1>
          <p>
            Your next adventure awaits! Discover new destinations and
            unforgettable experiences.
          </p>
         <a href="\tours"><button className="cta-button">Get Started</button></a> 
        </div>
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/915972/pexels-photo-915972.jpeg?cs=srgb&dl=adult-adventure-backlit-915972.jpg&fm=jpg"
            height="850px"
            width="850px"
            alt="Travel Adventure"
          />
        </div>
      </section>

      <section className="services-section">
        <h2>
          Our <span>Services</span>
        </h2>
        <div className="service-cards">
          <div className="card">
            <img
              src="https://www.busytourist.com/wp-content/uploads/2019/05/choose-a-destination-640x372.jpg"
              height="80px"
              width="100px"
              alt="Destination Planning"
            />
            <h3>Destination Planning</h3>
            <p>
              We help you find the best destinations for your dream vacation.
            </p>
          </div>
          <div className="card">
            <img
              src="https://oretoo.com/wp-content/uploads/2021/03/international-tour-package-735x400.jpg"
              height="80px"
              width="100px"
              alt="Tour Packages"
            />
            <h3>Tour Packages</h3>
            <p>Customized tours for solo travelers, families, and groups.</p>
          </div>
          <div className="card">
            <img
              src="https://www.emergencyassistanceplus.com/wp-content/uploads/2023/06/04_Image_All-travelers-welcome.jpg"
              height="80px"
              width="100px"
              alt="Travel Assistance"
            />
            <h3>Travel Assistance</h3>
            <p>24/7 support for a seamless travel experience.</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2>
          Travel <span>Gallery</span>
        </h2>
        <div className="gallery">
          <img
            src="https://media.architecturaldigest.com/photos/5cdadfa704c41e74349a8438/master/pass/GettyImages-931933966.jpg"
            height="200px"
            width="200px"
            alt="New York City Skyline"
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.adYGjfEwLEmp8jU8cgT_LwHaFj&pid=Api&P=0&h=220"
            height="200px"
            width="200px"
            alt="Eiffel Tower in Paris"
          />
          <img
            src="https://wallup.net/wp-content/uploads/2019/10/52288-australia-sydney-opera-house-bridge-evening-lights-buildings-architecture-roads-ocean-sea-bay-harbor-sky-clouds-2.jpg"
            height="200px"
            width="200px"
            alt="sydney"
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.xZiLk7RRtUqNegjIrSW1zAHaE8&pid=Api&P=0&h=220"
            height="200px"
            width="200px"
            alt="Tokyo Skyline"
          />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.do-MpmtBaDcmzjWcjuyKkgHaDI&pid=Api&P=0&h=220"
              height="30px"
              width="80px"
              alt="JK Travel Logo"
            />
            <p>Your gateway to amazing journeys!</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="\nodebox\src\componets\frontpage.js">Home</a>
              </li>
              <li>
                <a href="\nodebox\src\componets\home.js">Tours</a>
              </li>
              <li>
                <a href="\nodebox\src\css\Contact.css">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>📞 +01 1234567890</p>
            <p>📧 contact@jktravel.com</p>
            <div className="social-icons">
              <a href="">Facebook</a>
              <a href="">Instagram</a>
            </div>
          </div>
        </div>
        <p className="copyright">© 2025 JK Travel. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default dog;
