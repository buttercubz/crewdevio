import React, { Fragment } from "react";

import { membersList } from "StaticData/index";
import MemberCard from "Components/MemberCard";

import "./css.css"

function TeamPage() {
  return (
    <section>
      <h1 className="team-title"><span className="color-blue">Our</span> Team</h1>
      <div className="team-container">
        {membersList.map((memberItem, index) => (
          <MemberCard memberItem={memberItem} key={index}/>
        ))}
      </div>
    </section>
  );
}

export default TeamPage;
