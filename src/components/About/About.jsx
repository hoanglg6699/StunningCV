import React from "react";
import "./About.css";
import { ThemeProvider } from "styled-components";
import LogoComponent from "../../subComponents/LogoComponent/LogoComponent";
import ParticleComponent from "../../subComponents/ParticleComponent/ParticleComponent";
import PowerButton from "../../subComponents/PowerButton/PowerButton";
import Socials from "../../subComponents/Socials/Socials";
import { darkTheme } from "../Themes/Themes";
import astronaut from "../../assets/Images/spaceman.png";
import BigTitle from "../../subComponents/BigTitle/BigTitle";

const About = (props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="about-wrapper">
        <LogoComponent theme='dark' />
        <Socials theme='dark' />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <div className="about-spaceman">
          <img src={astronaut} alt="spaceman" />
        </div>
      </div>
      <div className="about-main">
        Spirit/Attitude:<br />
        - Hardworking, eager to learn<br />
        - Good communication (listening, presenting)<br />
        - Proactive, high responsibility at work<br />
        - Have a disciplined spirit and serious professional ethics<br />
        - Good thinking<br />
        - Know how to think about the collective, about the common goal<br />
        - Ability to work independently and in a team...<br />
        </div>
        <BigTitle theme={darkTheme} text="ABOUT" top="5%" left="50%" />
    </ThemeProvider>
  );
};

export default About;
