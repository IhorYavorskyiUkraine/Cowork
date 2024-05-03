import { motion } from "framer-motion";

import img from "/images/hero/image.png";

import "./Hero.scss";

const Hero = () => {
   return (
      <>
         <section className="hero">
            <div className="container">
               <div className="hero__content">
                  <motion.div
                     className="hero__left"
                     initial={{ x: -100 }}
                     animate={{ x: 0 }}
                     transition={{ duration: 0.3 }}
                  >
                     <h1 className="hero__title">
                        Elevate Your Workspace with <span>Cowork</span>
                     </h1>
                     <p className="hero__text text">
                        Welcome to Cowork – where innovation meets collaboration
                        in the heart of productivity! Unleash 🚀 your potential
                        in our thoughtfully designed coworking spaces, tailored
                        to inspire creativity and foster connections.
                     </p>
                     <button type="button" className="hero__button btn">
                        <span>Claim Your Spot</span>
                     </button>
                  </motion.div>
                  <motion.div
                     className="hero__right"
                     initial={{ x: 100 }}
                     animate={{ x: 0 }}
                     transition={{ duration: 0.3 }}
                  >
                     <div className="hero__image">
                        <img src={img} alt="image" />
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Hero;
