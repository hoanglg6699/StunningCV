import React, { useEffect, useRef } from "react";
import "./Work.css";
import { ThemeProvider } from "styled-components";
import LogoComponent from "../../subComponents/LogoComponent/LogoComponent";
import ParticleComponent from "../../subComponents/ParticleComponent/ParticleComponent";
import PowerButton from "../../subComponents/PowerButton/PowerButton";
import Socials from "../../subComponents/Socials/Socials";
import { darkTheme } from "../Themes/Themes";
import BigTitle from "../../subComponents/BigTitle/BigTitle";
import { motion } from "framer-motion";

import { WorkList } from "../../data/WorkData";
import Card from "../../subComponents/Card/Card";
import { YinYang } from "../../components/AllSvgs";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Work = (props) => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="work-wrapper">
        <LogoComponent theme="dark" />
        <Socials theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <motion.ul
          className="work-main"
          ref={ref}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {WorkList.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </motion.ul>
        <span className="work-rotate" ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </span>
      </div>
      <BigTitle theme={darkTheme} text="WORK" top="5%" left="50%" />
    </ThemeProvider>
  );
};

export default Work;
