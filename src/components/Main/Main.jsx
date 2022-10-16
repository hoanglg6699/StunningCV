import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CenterButton from "../../subComponents/CenterButton/CenterButton";
import LogoComponent from "../../subComponents/LogoComponent/LogoComponent";
import PowerButton from "../../subComponents/PowerButton/PowerButton";
import Socials from "../../subComponents/Socials/Socials";
import Introduce from "../Introduce/Introduce";
import Introduction from "../Introduction/Introduction";
import "./Main.css";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Main = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => {
    setclick(!click);
  };

  return (
    // <div className="main">Main</div>;
    <MainContainer>
      {/* This div tag will appear when clicking on the circle in the middle of the screen */}
      <Introduce click={click} />
      <div className="main__container">
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <Socials theme={click ? "dark" : "light"} />

        {/* Contact */}
        <div>
          <a
            className="contact-linkto"
            target={"_blank"}
            rel="noreferrer"
            href="mailto:hoang.work@gmail.com"
          >
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send Message
            </motion.h2>
          </a>
        </div>
        {/* End Contact */}

        {/* Skills */}
        <div>
          <Link className="skills-linkto" to={"/skills"}>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Skills
            </motion.h2>
          </Link>
        </div>
        {/* End Skills */}

        {/* Work */}
        <Link
          the
          className={click ? "work-linkto-active" : "work-linkto"}
          to={"/work"}
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </Link>
        {/* End Work */}

        {/* About */}
        <div className="bottom-wrapper">
          <Link
            click={+click}
            className={click ? "about-linkto-active" : "about-linkto"}
            to={"/about"}
          >
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </Link>
        </div>
        {/* End About */}

        <CenterButton handleClick={handleClick} click={click} />
        {click ? (
          <Introduction theme={click ? "dark" : "light"} click={click} />
        ) : null}
      </div>
    </MainContainer>
  );
};

export default Main;
