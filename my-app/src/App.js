// src/App.js
import "./index.css";
import "./style.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const h1 = document.querySelector(".main-title");
    const h2 = document.querySelector(".sub-title");

    // Adding animation class to h1 and h2 after a delay
    setTimeout(() => {
      h1.classList.add("large-font");
      h2.classList.add("medium-font");
    }, 1000);
  }, []);

  return (
    <div>
      <div id="test">
        <h1 className="main-title">Welcome to my portfolio!</h1>
        <h2 className="sub-title">Let me introduce myself.</h2>
      </div>
      <div className="container">
        <div className="left">
          <div className="theme">
            <p>My hobbies</p>
          </div>
          <p className="medium-font">
            cyclynig, running, snowbording, watching movies, cuisines
          </p>
          <div className="theme">
            <p>Age</p>
          </div>
          <p className="medium-font">23 years old</p>
          <div className="theme">
            <p>Majoring</p>
          </div>
          <p className="medium-font">
            Electronics(the diagnoisis of lithium-ion battery)
          </p>
        </div>

        <div className="right">
          <p>This is the right section with hobbies and other information.</p>
          <img src="./圧縮サンプル画像.jpeg" width="500" alt="food" />
        </div>
      </div>

      <div className="container">
        <form onsubmit="sendEmail(); reset(); return false;">
          <h3>Get in touch</h3>
          <input type="text" id="name" placeholder="Your Name" required />
          <br />
          <input type="email" id="email" placeholder="Email id" required />
          <br />
          <input type="text" id="phone" placeholder="Phone no." required />
          <br />
          <textarea
            id="message"
            rows="4"
            placeholder="How can we help you?"
          ></textarea>
          <br />
          <button type="submit">Send</button>
        </form>

      </div>

      <div className="three_container">
        <div className="item">
          <p>My GitAccount</p>
        </div>
        <div className="item">
          <p>My organization</p>
          <a
            href="https://www.tus.ac.jp/academics/faculty/sciencetechnology/electrical_engineering/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tokyo University of Science
          </a>
        </div>
        <div className="item">
          <p>Contact</p>
          <p>E-mail address</p>
        </div>
      </div>
    </div>
  );
}

export default App;
