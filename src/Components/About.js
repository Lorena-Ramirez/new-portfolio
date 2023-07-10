import React, { Component } from 'react';
import ResumeDownload from "../resume/lorenaRamirez-Resume.pdf";
class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Lorena Ramirez Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2><span>About Me</span></h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2><span>Contact Details</span></h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>{city}, {state} {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={ResumeDownload} target="blank_" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
