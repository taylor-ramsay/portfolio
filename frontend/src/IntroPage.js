import React, { Component } from 'react';
import resume from './Taylor_Ramsay_Web_Dev_18.pdf'
import { Link } from 'react-router-dom'

class componentName extends Component {
    render() {
        return (
            <div className="white-text vert-align">
                <div className="hor-align">
                    <center>
                        <h1>Taylor Ramsay</h1>
                        <h2>Web Developer</h2>
                        <h3 className="grey-text valign-wrapper location-wrapper">Toronto, ON<i class="material-icons location">location_on</i></h3>
                        <div className="under-name"></div>
                    </center>
                    <h3>I love working with&nbsp;
                    <span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='[ "Javascript", "React", "Cool People!", "NodeJS", "ExpressJS", "Startups", "MongoDB", "CSS", "New Technologies", "HTML" ]'></span>
                    </h3>
                    <br />
                    <h4>Looking for my next adventure...</h4>
                    <div className="social-wrapper">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tayloramsay/"><div className="social-box tooltipped linkedin" data-position="left" data-tooltip="Add me on LinkedIn"></div></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/taylor-ramsay"><div className="social-box tooltipped github" data-position="left" data-tooltip="See what I'm working on"><img className="github" /></div></a>
                        <Link to="/contact-me" onClick={()=>{this.props.clickOnContactMe()}}><div className="social-box tooltipped" data-position="left" data-tooltip="Get in touch"><i className="material-icons email">mail_outline</i></div></Link>
                        <a href={resume} target="_blank"><div className="social-box tooltipped" data-position="left" data-tooltip="Download my Resume"><h3 className="cv">CV</h3></div></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default componentName;
