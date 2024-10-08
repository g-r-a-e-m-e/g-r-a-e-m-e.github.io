/**
 * About
 */

import React from "react";

/**
 * Background image
 */
import image from "../images/max-mckinnon-c9OCWLka764-unsplash.jpg";

const imageAltText = "An image of the Milky Way galaxy.";

/**
 * Description
 */
const description =
  "I am a data scientist and am currently pursuing an Astrophysics degree at Old Dominion University. Thank you for visiting my site.";


/**
 * Summary
 */
const summary = "I have degrees in economics and business analytics, as well as professional certificates in data analytics, data science, and deep learning.";

/**
 * Detail
 */
const detail =
  "I aim to use data to solve problems and make the world a better place for all. I am working to earn a degree in Astrophysics and hope to one day work as a research scientist in this field.";

/**
 * Skills
 */
const skillsList = [
  "Data science",
  "Python programming",
  "R programming",
  "Machine learning",
  "Cloud computing",
  "Data visualization",
];

/**
 * Education
 */
const educationList = [
  "B.S. Astrophysics, Old Dominion University, 2025 (exp.)",
  "M.S. Business Analytics, College of William and Mary, 2021",
  "B.S. Business Analytics/Economics, Old Dominion University, 2019",
];

/**
 * Currently Learning
 */
const currentlyLearning = "I am currently learning video game development using tools such as:"
const learningList = [
  "Blender",
  "Aseprite",
  "Libresprite",
  "Pixelorama",
  "Unreal Engine 5",
  "Godot"
]

/**
 * Build About section
 */
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "transparent",
          width: "100%",
          textAlign: "left",
          margin: "1rem",
        }}
      >
        <h2>About Me</h2>
        <p>{description}</p>
        <p>{detail}</p>
        <p>{summary}</p>
        <hr />
        <h2>Skills</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 3,
            fontSize: "1rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <h2>Education</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 1,
            fontSize: "1rem",
          }}
        >
          {educationList.map((education) => (
            <li key={education}>{education}</li>
          ))}
        </ul>
        <h2>Currently Learning</h2>
        <p>{currentlyLearning}</p>
        <ul
          style={{
            textAlign: "left",
            columns: 3,
            fontSize: "1rem",
          }}
        >
          {learningList.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
        <hr />
      </div>
    </section>
  );
};

export default About;
