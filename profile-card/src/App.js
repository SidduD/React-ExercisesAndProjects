import "./App.css";

const skills = [
  {
    skill: "HTML",
    level: "advanced",
    icon: "html-logo.jpg",
    color: "#fff6cf",
  },
  {
    skill: "CSS",
    level: "intermediate",
    icon: "css-logo.jpg",
    color: "blue",
  },
  {
    skill: "React",
    level: "beginner",
    icon: "favicon.ico",
    color: "red",
  },
  {
    skill: "Javascript",
    level: "intermediate",
    icon: "javascript-logo.png",
    color: "yellow",
  },
  {
    skill: "Python",
    level: "advanced",
    icon: "python-logo.jpg",
    color: "teal",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="./sid.png" alt="Siddharth Dhanasekar" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Siddharth Dhanasekar</h1>
      <p>
        Aspiring Front-End Developer, recent Computer Eng Grad from{" "}
        <strong>McMaster University</strong>. Whent not coding, I like to
        workout, play sports (baseball/basketball), or to just play some muscial
        instruments (drums, keyboard etc).
      </p>
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          icon={skill.icon}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, color, icon }) {
  return (
    <div className="skill">
      <div
        style={{
          backgroundColor: color,
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        <span>{skill}</span>
        <span>
          {level === "beginner" && "👶"}
          {level === "intermediate" && "👍"}
          {level === "advanced" && "💪"}
        </span>
      </div>

      <span>
        <img src={icon} alt="skill-logo"></img>
      </span>
    </div>
  );
}

export default App;
