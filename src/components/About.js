import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="col-2">
          <h2>About</h2>
          <div className="about-me">
            <p>
              I'm a Full-stack Engineer and Founder of (Skills Access) driven by
              solving problems, attention to detail and the curiosity to learn
              more.
            </p>
            <p>
              As a Software Engineer, my job is to bridge the gap between
              imagination design and coding, by making it interactive and
              scalable.
            </p>
            <p>
              My mission is to find a position within a diverse team , which
              allows me to expand my knowledge.
            </p>
            <p>
              I am looking for full-time/internship/part-time roles as a
              software engineer/developer, full-stack engineer
            </p>
          </div>
          <div className="about-me">
            <h4>Skills Access</h4>
            <p>
              Skills Access is a non-profit e-learning website designed to
              assist students who are interested in starting their careers in
              programming and web development.
            </p>
            <p>
              The website provides comprehensive learning materials and a
              user-friendly interface, allowing students to read concepts and
              test their understanding through the "Try Me" feature without
              leaving the website.
            </p>
            <p>
              Additionally, the website offers interactive learning environments
              that foster engagement and provide a seamless learning experience.
            </p>
            <p>
              To further support students, Skills Access also provides a YouTube
              channel with instructional videos and a community forum on
              platforms like Discord and Stack Overflow for additional student
              support.
            </p>
          </div>
        </div>
        <div className="col-2">
          <h2>Experince</h2>
          <span className="line"></span>
          <div className="experience">
            <h3>Web Developer (Instructor)</h3>
            <p>
              As a web developer instructor, the author taught students
              comprehensive web development techniques, covering topics such as
              HTML, CSS, JavaScript, core Java, C++, database management, and
              jQuery.
            </p>
            <p>
              Through engaging lessons and effective teaching methodologies,
              students gained a solid understanding of web development
              fundamentals, enabling them to excel in the field.
            </p>{" "}
            <p>
              The students are equipped with the skills and knowledge needed for
              success in their future endeavors.
            </p>
            <span>
              <strong>2017-2020</strong>
            </span>
          </div>
          <div className="experience">
            <h3>React Developer</h3>
            <p>
              As a front-end developer, the author led the redesign of a
              website's user interface using JavaScript, React.js, and tailwind
              CSS.
            </p>{" "}
            <p>
              I implemented a modern and visually appealing design, focusing on
              creating an intuitive and engaging interface for users.
            </p>{" "}
            <p>
              Essential functionalities such as login and registration
              validation processes were also implemented to ensure secure data
              handling.
            </p>{" "}
            <p>
              Custom dashboards for teachers and students, assignment features,
              and a calendar system were developed to enhance the website's
              functionality.
            </p>{" "}
            <p>
              My contributions as a front-end developer have played a
              significant role in improving the website and enhancing its user
              satisfaction.
            </p>
            <span>
              <strong>2020-2021</strong>
            </span>
          </div>
          <div className="experience">
            <h3>Python Full-stack Engineer</h3>
            <p>
              The development team is creating a library to simplify
              authentication for developers, enabling them to register and
              download authentication codes for efficient and secure user
              authentication.
            </p>
            <p>
              The task of designing the home page and implementing the comments
              section was assigned to me, then I used modern web technologies
              such as React.js, Node.js, Express, and MongoDB to create a
              seamless and secure user experience for the application.
            </p>{" "}
            <p>
              The comments section allows registered users to make comments and
              like other users' comments after authentication.
            </p>{" "}
            <p>
              Through the use of these technologies, I have successfully
              completed the task, creating a seamless and secure user experience
              for our application.
            </p>
            <span>
              <strong>2021-2023</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
