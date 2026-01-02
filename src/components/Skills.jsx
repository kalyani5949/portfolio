const skills = [
  "HTML5", "CSS3", "JavaScript", "React",
  "Python", "Django", "Django REST",
  "SQLite", "MySQL", "Git", "GitHub"
];

const Skills = () => (
  <section id="skills" className="section">
    <h2>Technical Skills</h2>
    <div className="skill-box">
      {skills.map((skill, i) => (
        <span key={i}>{skill}</span>
      ))}
    </div>
  </section>
);

export default Skills;
