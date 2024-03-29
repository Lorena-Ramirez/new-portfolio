import React, { Component } from 'react';
import emailjs from "emailjs-com";

class Contact extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var message = this.props.data.contactmessage;
      }
      const sendEmail = (e) => {
         e.preventDefault();
         //updated service ID
         emailjs.sendForm('service_g3e9k49', 'template_40zbw5a', e.target, 'user_JRjA8nHUkGQzgslVtGHas')
            .then((result) => {
               console.log(result.text);
            }, (error) => {
               console.log(error.text);
            });
         e.target.reset();
      }

      return (
         <section id="contact">
            <div className="row section-head">
               <div className="two columns header-col">
                  <h1><span>Get In Touch.</span></h1>
               </div>
               <div className="ten columns">
                  <p className="lead">{message}</p>
               </div>
            </div>

            <div className="row">
               <div className="eight columns">
                  <form id="contactForm" name="contactForm" onSubmit={sendEmail}>
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactName" name="contactName" />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="email" defaultValue="" size="35" id="contactEmail" name="contactEmail" />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                        </div>

                        <div>
                           {/* <button className="submit">Submit </button> */}
                           <input className="submit" type="submit" value="Submit"></input>
                        </div>
                     </fieldset>
                  </form>

                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>

               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">
                     <h4>Address and Phone</h4>
                     <p className="address" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "medium" }}>
                        {name}<br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
