<<<<<<< HEAD
/* @jsx insertionJsx */

import insertionJsx, { Fragment } from "insertion";
=======
import React, { Fragment } from "react";
>>>>>>> egg_jose

import erickPhoto from "../images/erick.jpg";
import rivierPhoto from "../images/rivier.jpg";
import estebanPhoto from "../images/esteban.jpg";
<<<<<<< HEAD
import { Link } from "insertion/router";
=======
>>>>>>> egg_jose

const members = [
  {
    name: "Erick Sosa Garcia",
    desc:
      "Hello I'm Erick I study Javascript, typescript, python, go, Node js and focused in deno 🦕",
    email: "ericksosagarcias@gmail.com",
    photo: erickPhoto,
    work: "Developer",
    social: {
      twitter: "https://twitter.com/a_badnick",
      github: "https://github.com/buttercubz",
      linkedin: "https://www.linkedin.com/in/erick-sosa-garcia-301b45185/",
      gitlab: "https://gitlab.com/ericksosagarcias",
      instagram: "https://www.instagram.com/ericksosagarcia",
    },
  },
  {
    name: "Rivier Grullon",
    desc:
      "I'm Rivier, I'm an enthusiastic developer, I study Javascript, Typescript, Python, NodeJs but actually I'm focused on Deno 🦕",
    email: "rgrullon@ipisdosaj.edu.do",
    photo: rivierPhoto,
    work: "Developer",
    social: {
      twitter: "https://twitter.com/RamirezRivier",
      github: "https://github.com/RivierGrullon",
    },
  },
  {
    name: "Jose Esteban Garcia",
    desc:
      "Hi! I'm Jose Esteban, web developer apprentice, always trying to learn something new. // Lover of cartoons and pizza 🍕",
    email: "josegg1897@gmail.com",
    photo: estebanPhoto,
    work: "Developer",
    social: {
      twitter: "https://twitter.com/egg_jose",
      github: "https://github.com/jose1897",
      linkedin:
        "https://www.linkedin.com/in/jose-esteban-garcia-grullon-443624198/",
      instagram: "https://www.instagram.com/egg_jose/",
    },
  },
];

<<<<<<< HEAD
function team() {
=======
function Team() {
>>>>>>> egg_jose
  return (
    <Fragment>
      <h1 className="team-title"><span className="color-blue">Our</span> Team</h1>
      <div className="team-container">
<<<<<<< HEAD
        {members.map(({ name, desc, email, photo, work, social }) => (
          <div className="member-card">
            <h1 className="name">
              <span class="color-blue">{name}</span>
            </h1>
            <img src={photo} alt="Profile Photo" className="profile-picture" />
            <h3 className="work">
              Work: <span class="color-yellow">{work}</span>
=======
        {members.map(({ name, desc, email, photo, work, social }, index) => (
          <div className="member-card" key={index}>
            <h1 className="name">
              <span className="color-blue">{name}</span>
            </h1>
            <img src={photo} alt="Profile Photo" className="profile-picture" />
            <h3 className="work">
              Work: <span className="color-yellow">{work}</span>
>>>>>>> egg_jose
            </h3>
            <p className="desc">{desc}</p>
            <a className="email">{email}</a>
            <div className="social-medias">
<<<<<<< HEAD
              {Object.keys(social).map((mediaName) => (
                <a
                  href={social[mediaName]}
                  title={mediaName}
                  style="color:#000"
                >
                  <i class={`fa fa-${mediaName}`} style="font-size:24px"></i>
=======
              {Object.keys(social).map((mediaName, index) => (
                <a
                  href={social[mediaName]}
                  title={mediaName}
                  style={{"color":"#000"}}
                  key={index}
                >
                  <i className={`fa fa-${mediaName}`} style={{"fontSize":"24px"}}></i>
>>>>>>> egg_jose
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

<<<<<<< HEAD
export default team;
=======
export default Team;
>>>>>>> egg_jose
