import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var techmessage = this.props.data.techmessage;
      var skillmessage = this.props.data.skillmessage;
      var tech = this.props.data.tech.map(function (tech) {
        var techIcon = 'images/tech/' + tech.image;
        return (
          <div key={tech.name} className="columns feature-item col col-container">
            <div className='border'>
              <img className='tech-icon' alt={tech.name} src={techIcon} />
              <h5>{tech.name}</h5>
              <p>{tech.description}</p>
            </div>
          </div>
        )
      })

      var skills = this.props.data.skills.map(function (skills) {
        var skillsIcon = 'images/' + skills.image;
        return <div key={skills.name} className="columns feature-item skills col col-container">
          <div className='skills border'>
            <img className='skill-icon' alt={skills.name} src={skillsIcon} />
            <h5><span>{skills.name}</span></h5>
            <ul className='skills'>
              {skills.skill.map((skill) => <li>{skill}</li>)}
            </ul>
          </div>
        </div>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Favorite Tech</span></h1>
          </div>

          <div>
            <p className="lead">{techmessage}</p>
            <ul className="col-container ">
              {tech}
            </ul>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div>
            <p className="lead">{skillmessage}</p>
            <ul className="col-container ">
              {skills}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
