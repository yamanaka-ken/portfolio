import React, { useState, useEffect } from 'react';
import "./index.css";
import "./style.css";


const Page1 = () => {
return(
    <div>
        <div className="container">
            <div className="left">
            <div className="theme">
                <p>Ken Yamanaka</p>
            </div>
                <div >
                <img className = "example_img" src="./face.png" />  
            </div>

        </div>

        <div className="right">

        <p className="medium-font">
        I am a first year graduate student and my major is electrical circuits.
        I am exposed to programming with code and microcontrollers to analyze in experiments. 
        In this portfolio, I will write about my skills and hobbies.
        </p>

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
                <li>STM32</li>
                </ul>
                </div>
                <div className="right">
                <ul class="cp_list">
                <li>PSIM(Circuit-Simulater)</li>
                <li>LTSPice(Circuit-Simulater)</li>
                <li>MATLAB</li>
                <li>React</li>
                <li>GitHub</li>
                </ul>
                </div>
            </div>

        </p>
        </div>
    </div>
  </div>
);
};

export default Page1;