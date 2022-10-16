import React from "react";
import { Facebook, Github } from "../../components/AllSvgs";
import "./Socials.css";
import { darkTheme } from "../../components/Themes/Themes";
import { motion } from "framer-motion";

const Socials = (props) => {
  return (
    <div className="socials">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.0 }}
      >
        <a
          style={{ color: "inherit" }}
          className="social-icon"
          rel="noreferrer"
          target={"_blank"}
          href="https://github.com/hoanglg6699"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "inherit" }}
          className="social-icon"
          rel="noreferrer"
          target={"_blank"}
          href="https://www.facebook.com/hoang.lygia.6/"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <motion.span
        // color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
        style={{
          width: "2px",
          height: "8rem",
          backgroundColor: `${
            props.theme === "dark" ? darkTheme.text : darkTheme.body
          }`,
        }}
        className="socials-line"
      ></motion.span>
    </div>
  );
};

export default Socials;
