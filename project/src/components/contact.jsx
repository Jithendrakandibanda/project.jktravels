// App.js
import "./contact.css";

function cat() {
 
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <h1>JK Travel</h1>
        </div>
      </header>

      <main className="contact-main">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns, please feel free to reach out to
          us using the form below!
        </p>

        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Enter your message"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 Trip.com | All rights reserved</p>
      </footer>
    </div>
  );
}

export default cat;
