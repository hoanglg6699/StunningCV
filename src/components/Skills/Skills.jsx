import React from "react";
import "./Skills.css";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../Themes/Themes";
import LogoComponent from "../../subComponents/LogoComponent/LogoComponent";
import Socials from "../../subComponents/Socials/Socials";
import PowerButton from "../../subComponents/PowerButton/PowerButton";
import ParticleComponent from "../../subComponents/ParticleComponent/ParticleComponent";
import { Develope } from "../AllSvgs";
import BigTitle from "../../subComponents/BigTitle/BigTitle";

const Skills = (props) => {
  return (
    <ThemeProvider
      theme={lightTheme}
    >
      <div className="skills-container">
        <LogoComponent theme="light" />
        <Socials theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <div className="skills-content">
          <h2 className="skills-content__title">
            <Develope width={40} height={40} /> Backend
          </h2>
          <div className="skills-content__desc">
            <strong>Skills</strong>
            <ul>
              <li>NodeJS</li>
              <li>MongDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="skills-content__desc">
            <strong></strong>
            <p></p>
          </div>
        </div>
        <div className="skills-content">
          <h2 className="skills-content__title">
            <Develope width={40} height={40} /> Frontend
          </h2>
          <div className="skills-content__desc">
            <strong>Skills</strong>
            <p>Html, Css, Js, ReactJS, UmiJS, Sass, Firebase, AntDesign etc.</p>
          </div>
          <div className="skills-content__desc">
            <strong>Tools</strong>
            <p>VScode, Github, SourceTree etc.</p>
          </div>
        </div>
        <BigTitle theme={lightTheme} text="SKILLS" top="75%" right="30%" />
      </div>
    </ThemeProvider>
  );
};

export default Skills;
