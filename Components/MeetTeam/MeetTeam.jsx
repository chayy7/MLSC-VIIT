import React from "react";
import { useNavigate } from "react-router-dom";
import "./MeetTeam.css";
import meetBg from "../../src/assets/team-bg.JPG";

const MeetTeam = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/teams");
  };

  return (
    <section className="meet-team-hero" aria-label="Meet the MLSC Team 2025">
      <div
        className="meet-team-bg"
        style={{ backgroundImage: `url(${meetBg})` }}
        aria-hidden="true"
      />
      <div className="meet-team-overlay" aria-hidden="true" />
      <div className="meet-team-content">
        <h2 className="meet-team-title">MLSC Team - 2025</h2>
        <p className="meet-team-sub">
          The people who make MLSC possible - bringing events, workshops and community together.
        </p>

        <button
          className="meet-team-cta"
          aria-label="Meet the MLSC team - 2025"
          onClick={handleClick}
        >
          Meet the Team
        </button>
      </div>
    </section>
  );
};

export default MeetTeam;