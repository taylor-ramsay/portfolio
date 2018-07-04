import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div className="yosemite-bg">
                <div className="row">
                    <div className="col s4">
                    </div>
                    <form className="col s4 form-bg white-text">
                        <div className="form-padding">
                            <div className="row">
                            <h2>Get in Touch</h2>
                                <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate" />
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate" />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                                    <label for="textarea2">Message</label>
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light">Send</button>
                        </div>
                    </form>
                    <div className="col s4">
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;
