import React, { Component } from 'react';

class NetworthJounal extends Component {
    render() {
        return (
            <div className="white-text bit-background">
                <div className="row">
                    <div className="col s6 portfolio-image-container">
                    <a href="http://www.btcentiment.com">
                        <div className="nwj-image">
                        </div>
                    </a>
                    </div>
                    <div className="col s6 portfolio-text-container">
               
                            <h1>Networth Journal</h1>
                            <h3 className="grey-text"><a target="_blank" rel="noopener noreferrer" className="website" href="http://demo.networthjournal.io/">demo.networthjournal.io</a></h3>
                            <div className="row">
                            <div className="col s12">
                            <div className="tech">
                            <span className="new badge" data-badge-caption="">NodeJS</span>
                            <span className="new badge" data-badge-caption="">React</span>
                            <span className="new badge" data-badge-caption="">MongoDB</span>
                            <span className="new badge" data-badge-caption="">IBM Watson API</span>
                            <span className="new badge" data-badge-caption="">Coinbase API</span>
                            <span className="new badge" data-badge-caption="">ExpressJS</span>
                            <span className="new badge" data-badge-caption="">NodeJS</span>
                            <span className="new badge" data-badge-caption="">JSX</span>
                            <span className="new badge" data-badge-caption="">CSS</span>
                            <span className="new badge" data-badge-caption="">Axios</span>
                            </div>
                            </div>
                            </div>
                        <h4>A personal finance journaling tool, that allows you to track your net worth over time while providing a journal of financial events that happen each month (ie. purchased a car, investments went up, etc.).</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default NetworthJounal;