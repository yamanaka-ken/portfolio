// src/App.js
import "./index.css";
import "./style.css";
import './App.css';
import EmailForm from './EmailForm';
import ImageSwitching from './ImageSwitching';
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
            <p>Ken Yamanaka</p>
          </div>
          <p className="medium-font">
          I am a first year graduate student and my major is electrical circuits.
           I am exposed to programming with code and microcontrollers to analyze in experiments. 
           In this portfolio, I will write about my skills and hobbies.
          </p>
          <div className="hr1"></div>
          <p className="medium-font">
            <strong>QUALUFICATION</strong>
            <ul class="cp_list">
            <li>Fundamental Information Technology Engineer Examination</li>
            <li>TOEIC(L&R): Score 775</li>
            <li>driver's license</li>
            <li>Bachelor's degree</li>
            </ul>
            
          </p>
          <p className="medium-font">
            <strong>SKILLS</strong>

            <div className="wrapper">
              <div className="left">
                  <ul class="cp_list">
                  <li>Python</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>JavaScript</li>
                  </ul>
                </div>
                <div className="right">
                  <ul class="cp_list">
                  <li>PSIM(Circuit-Simulater)</li>
                  <li>LTSPice(Circuit-Simulater)</li>
                  <li>MATLAB</li>
                  <li>React</li>
                  </ul>
                </div>
            </div>
 
          </p>

        </div>

        <div className="right">
          <p>My hobbies..</p>
          <ImageSwitching />
        </div>
      </div>

      <div className="container">
        <EmailForm />

      </div>

      <div className="mid_container">
        <h3>Miscellaneous notes</h3><br/>
        <h4>It seems that it is possible to implement email<br/>
           functionality on the front end only by using EmailJS, <br/>
           an email program that runs entirely on JavaScript. <br/>
           So I created one to practice using JavaScript.</h4>

      </div>

      <div className="three_container">
        <div className="item">
          <p>GitHub</p>
          <a
            href="https://github.com/yamanaka-ken/test.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitAccount
          </a>
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

        </div>
      </div>
    </div>
  );
}



export default App;

