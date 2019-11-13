import React from "react";

const Skills = () => {
  return (
    <section className='skills'>
      <div className='section-head'>
        <h6 className='text-center'>View My Skills</h6>
        <h2 className='text-center'>Skills</h2>
        <div className='underline'></div>
      </div>
      <div className='row'>
        <div className='col-md-10 mx-auto'>
          {/* Tech Skills*/}
          <h3>Tech Skills</h3>
          <p>
            • Front-End Development: React.js, Redux, Redux-Saga, CSS3, Sass,
            Less, HTML5, JavaScript, AJAX, React Context API, React
            Hooks, Ant.design, Bootstrap, Materialize, Semantic UI, Responsive
            design, Webpack, ES6
          </p>
          <p>
            • Back-End Development: Node.js, ExpressJS, Mongoose, RESTful API, KeystoneJS
          </p>
          <p>• Database design and management: MySQL, MongoDB</p>
          <p>
            • Coding Languages: CSS3, HTML5, JavaScript, Python, SQL, MATLAB
          </p>
          <p>• Tool: VSCode, Visual Studio, Eclipse</p>
          <p>• Cloud: AWS S3, Heroku, MongoDB Atlas</p>
          {/* UX Skills */}
          <h3>UX Skills</h3>
          <p>• Design Process: Conceptual Design, Interaction Design</p>
          <p>
            • Testing: Jest, Enzyme, TDD, BDD
          </p>
          <p>
            • Prototyping software:Photoshop, Illustrator
          </p>
          <h3>Teamwork Skills</h3>
          <p>• Tool: Git, Github, Bitbucket, Jira</p>
          <p>• Methodology: Agile, Scrum</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
