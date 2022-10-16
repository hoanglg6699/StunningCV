import React from "react";
import "./Introduction.css";
import { darkTheme } from "../Themes/Themes";
import Me from '../../assets/Images/profile-img.png'
import { motion } from "framer-motion";

const Introduction = (props) => {
  return (
    <motion.div
    initial={{height: 0}}
    animate={{height: '55vh'}}
    transition={{type: 'spring', duration: 2, delay: 1}}
    //   style={{
    //     background: `linear-gradient(to right, ${props.theme === "dark" ? darkTheme.text : darkTheme.body} 50%, ${props.theme === "dark" ? darkTheme.body : darkTheme.text} 50%) bottom, linear-gradient(to right, ${props.theme === "dark" ? darkTheme.body : darkTheme.text} 50%, ${props.theme === "dark" ? darkTheme.text : darkTheme.body} 50%) top`,
    //     borderLeft: `2px solid ${props.theme === "dark" ? darkTheme.body : darkTheme.text}`,
    //     borderRight: `2px solid ${props.theme === "dark" ? darkTheme.text : darkTheme.body}`
    //   }}
      className="introduction"

    >
      <div className="introduction-container">
        <div style={{color: `${props.theme === "dark" ? darkTheme.text : darkTheme.body}`}} className="introduction-content">
            <h1>Hi,</h1>
            <h2>I'm Hoang</h2>
            <h6>Frontend Web Developer</h6>
        </div>
        <div className="introduction-content">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
                <img className="introduction-img" src={Me} alt="Profile Pic" />
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// 1:22

export default Introduction;
