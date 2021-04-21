import React from "react";
import { membersList } from "../static/index.js";
import MemberCard from "./cards/memberCard.jsx";

function TeamPage() {
  return (
    <section>
      <h1 className="team-title">
        <span className="color-blue">Our</span> Team
      </h1>
      <div className="team-container">
        {membersList.map((memberItem, index) => (
          <MemberCard memberItem={memberItem} key={index} />
        ))}
      </div>
    </section>
  );
}

export default TeamPage;
