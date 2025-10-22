import React from "react";
import TiltedCard from "../TiltedCard/TiltedCard";
import teamsData from "../Teams/teamsData";

// Inline overlay style used consistently
const overlayStyle = {
  color: "#ffffff",
  backgroundColor: "rgba(62, 62, 62, 0.6)",
  padding: "4px 8px",
  borderRadius: "5px",
  position: "relative",
  top: "20px",
  left: "20px"
};

const Teams = ({ data = teamsData }) => {
  return (
    <>
      {data.map((section) => (
        <section className="team-section" key={section.title}>
          <h2 className="team-section-title">{section.title}</h2>
          <div className="team-grid">
            {section.members.map((member) => (
              <TiltedCard
                key={member.name}
                imageSrc={member.imageSrc}
                altText={member.altText}
                captionText={member.captionText}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                linkedIn={member.linkedIn}
                overlayContent={
                  <p className="tilted-card-demo-text" style={overlayStyle}>
                    {member.name}
                  </p>
                }
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default Teams;