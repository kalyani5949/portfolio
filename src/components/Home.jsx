import { motion } from "framer-motion";
import devImg from "../assets/dev-illustration.svg";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="home-text"
        >
          <h1>Hi, I'm <span>Kalyani P</span></h1>
          <h3>Python Full Stack Developer</h3>
          <p>
            Entry-level developer skilled in Django, React.js,
            REST APIs, and database-driven applications.
          </p>
          <a href="#contact" className="btn">Hire Me</a>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="home-image"
        >
          <img src={devImg} alt="Developer Illustration" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
