import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  /* Sticky shadow on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Active link highlight */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <h2 className="logo">Kalyani<span>.</span></h2>

        {/* Desktop Links */}
        <ul className="nav-links">
          {sections.map(sec => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={active === sec ? "active" : ""}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Dark Mode */}
          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Slide-In Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="side-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              ✕
            </button>

            {sections.map(sec => (
              <a
                key={sec}
                href={`#${sec}`}
                className={active === sec ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {sec.toUpperCase()}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
