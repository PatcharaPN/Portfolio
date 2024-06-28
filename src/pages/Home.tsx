import "./Home.css";
import Background from "../components/Background/BG";
import Nav from "../components/Nav";
import { Icon } from "@iconify/react";

function Home() {
  return (
    <div>
      <div className="background-content">
        <Nav />
        <Background />
      </div>
      <div className="Content-list">
        <div className="Content-1 fade-in">
          <p className="hello fade-in" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>
          <h2 className="fade-in" style={{ animationDelay: "0.2s" }}>
            PATCHARAPOL
          </h2>
          <h2 className="fade-in" style={{ animationDelay: "0.3s" }}>
            PANNAEN
          </h2>
          <p className="fade-in" style={{ animationDelay: "0.4s" }}>
            I'm Looking For Career
          </p>
          <h1 className="fade-in" style={{ animationDelay: "0.5s" }}>
            FULLSTACK DEVELOPER
          </h1>
          <div
            className="button-section fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <button className="resume-btn">
              <Icon icon="material-symbols:download" width={30} />
              Resume
            </button>
          </div>
          <div
            className="tech-stack fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="header">Tech Stack :</div>
            <div className="tech-list">
              <Icon icon="logos:react" />
              <Icon icon="devicon:nextjs" />
              <Icon icon="logos:flutter" />
              <Icon icon="logos:nodejs-icon" />
              <Icon icon="logos:nestjs" />
              <Icon icon="devicon:mongodb" />
              <Icon icon="logos:postgresql" />
            </div>
          </div>
        </div>
        <div className="profile"></div>
      </div>
    </div>
  );
}

export default Home;
