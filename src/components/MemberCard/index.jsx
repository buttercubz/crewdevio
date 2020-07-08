import React from "react";

import "./css.css";

function MemberCard({memberItem}) {
  const { name, desc, email, photo, work, social } = memberItem
  return (
    <div className="member-card" >
      <h1 className="name">
        <span className="color-blue">{name}</span>
      </h1>
      <img src={photo} alt="Profile Photo" className="profile-picture" />
      <h3 className="work">
        Work: <span className="color-yellow">{work}</span>
      </h3>
      <p className="desc">{desc}</p>
      <a className="email">{email}</a>
      <div className="social-medias">
        {Object.keys(social).map((mediaName, index) => (
          <a
            href={social[mediaName]}
            title={mediaName}
            style={{ color: "#000" }}
            key={index}
          >
            <i
              className={`fa fa-${mediaName}`}
              style={{ fontSize: "24px" }}
            ></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MemberCard;
