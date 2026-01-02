import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/YOUR_GITHUB_USERNAME"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/kalyani-gayathri-p/"
  }
];

const SocialSidebar = () => {
  return (
    <motion.div
      className="social-sidebar"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {socials.map((item, index) => (
        <motion.a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="social-link"
          whileHover={{ x: -6 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
        >
          {item.icon}
          <span className="tooltip">{item.name}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialSidebar;
