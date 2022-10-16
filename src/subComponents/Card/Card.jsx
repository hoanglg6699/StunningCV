import React from "react";
import { motion } from "framer-motion";
import { Github } from "../../components/AllSvgs";
import "./Card.css";

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data;

  return (
    <motion.li className="card-wrapper" key={id} variants={Item}>
      <h2 className="card-title">{name}</h2>
      <h2 className="card-desc">{description}</h2>
      <div className="card-tags">
        {tags.map((t, id) => {
          return (
            <span className="card-tag" key={id}>
              #{t}
            </span>
          );
        })}
      </div>
      <footer>
        <a className="card-link" href={demo} rel="noreferrer" target="_blank">
          Demo
        </a>
        <a
          className="card-github"
          href={github}
          rel="noreferrer"
          target="_blank"
        >
          <Github width={30} height={30} />
        </a>
      </footer>
    </motion.li>
  );
};

export default Card;
