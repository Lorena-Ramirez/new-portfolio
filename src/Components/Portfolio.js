import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item col">
          <div className="item-wrap ">
            <a href={projects.url} title={projects.title} target="_blank">
              <img className="projectImages"alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
          <button className="code-button"><a className="code-links" href={projects.giturl} target="_blank"> View Code </a></button>
        </div>
      })
    }

    return (
      <section id="portfolio">

        <div className="row">
          <div className="twelve columns collapsed">
            <h1><span>Have a look at some of My Work</span></h1>
            <div id="portfolio-wrapper" className="col-container">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
