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
      <div>
        <h1 className="main-title">Welcome to my portfolio!</h1>
        <h2 className="sub-title">Let me introduce myself.</h2>
      </div>

      <h1 id="banner">Profile</h1>
      <div className="container">

      <div className="right">
          <p className="resizeimage">
            <img src="./my-face-circuit-graphic.jpg" alt="food" />
          </p>
      </div>
      <div className="left">

          <p className="Name">K.Yamanaka</p>

          <div className="theme">
            <p>About Me</p>
          </div>
          <p className="medium-font">
          I was born in 2000 and am 24 years old. 
          I am doing research on circuits related 
          to the diagnosis of lithium-ion battery degradation at my university. 
          I am currently a first year graduate student looking for a job.Hobbies.
          My hobbies are watching movies and running and muscle training.
          I like to be physically active.
          </p>


      </div>
      
      </div>

      <h1 id="banner">Skills</h1>
      <div className="two_container">
        <div className="box2">
        <div class="box-title">Qualifications</div>
        <ul className="list-1">
        <li>FE(Fundamental Information<br>
        </br> Technology Engineer)</li>
        Date: 2024/04
        <br></br>
        <br></br>
        <li>TOEIC L&R 775</li>
        Date: 2023/11
        <br></br>
        <br></br>
        <li>Ordinary car license</li>
        Date: 2022/3
        </ul>
        </div>

        <div className="box2">
        <div class="box-title">Programming</div>
        <ul className="list-1">
        <li>Python(Span: 2 years)</li><br>
        </br><li>C/C++(Span: 6 month)</li><br>
        </br><li>HTML/CSS(Span: 6 month)</li><br>
        </br><li>MATLAB(Span: 2 month)</li><br>
        </br><li>Cisco Packet Tracer(Span: 6 month)</li><br>
        </br><li>React/JavaScript(Span: 1 month)</li>
        </ul>
        </div>

        <div className="box2">
        <div class="box-title">The others</div>
        <ul className="list-1">
        <li>
        Oscilloscope,impedance analyzer,heat gun, digital multimeter,soldering,ultrasonic cutter
        </li><br>
        </br><li>CAD(Fusion360, Eagle)</li><br>
        </br><li>Microcomputer(Arudino, STM32)</li><br>
        </br><li>Circuit analysis software(LTSpice,PSIM)</li>
        </ul>
        </div>
 
   

      </div>

      <h1 id="banner">Get In Touch With</h1>
      <div className="container">
        <form onsubmit="sendEmail(); reset(); return false;">

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

      <div className="mid_container">
        <h3>Sorry!</h3><br/>
        <h4>Email functionality is not implemented. It is only a formality.</h4>

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
          <p>E-mail address</p>
        </div>
      </div>
    </div>
  );
}

export default App;
