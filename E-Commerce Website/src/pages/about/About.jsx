import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const routeVariants = {
  initial: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      duration: 0.3,
      delay: 0.1,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const About = () => {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="about_container">
        <div className="about">
          <img src="./assets/Images/aboutMe.jpg" alt="" />
          <p className="about-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            quisquam sapiente exercitationem et porro minus laudantium dolor
            totam eos explicabo fugiat, dolores repellendus est eius qui placeat
            consequatur molestias magnam!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
