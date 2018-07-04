import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <form className="col s12 l6 white-text" method="POST" action="https://formspree.io/tayramsay@gmail.com">
                        <div className="form-padding">
                            <div className="row">
                            <h2>Get in Touch</h2>
                                <div className="input-field col s6">
                                    <input id="first_name" name="first_name" type="text" className="validate" />
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" name="last_name" className="validate" />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" name="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="textarea2" name="message" class="materialize-textarea" data-length="120"></textarea>
                                    <label for="textarea2">Message</label>
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light" type="submit" defaultValue="Send">Send</button>
                        </div>
                    </form>
                    <div className="col l6 portfolio-image-container">
                    <div className="yosemite-bg">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;
