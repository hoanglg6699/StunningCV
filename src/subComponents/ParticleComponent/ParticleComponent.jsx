import React from "react";
import "./ParticleComponent.css";
import Particles from "react-tsparticles";
import configDark from "../../config/particlesjs-config.json";
import configLight from "../../config/particlesjs-config-light.json";
import { loadFull } from "tsparticles";

const ParticleComponent = (props) => {
  const particlesInit = async (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <div className="ParticleComponent">
      <Particles
        id="tsparticles"
        init={particlesInit}
        params={props.theme === "light" ? configLight : configDark}
      />
    </div>
  );
};

export default ParticleComponent;
