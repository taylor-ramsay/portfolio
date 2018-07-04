import React, { Component } from 'react';

class BitSentiment extends Component {
    render() {
        return (
            <div className="white-text bit-background">
                <div className="row">
                    <div className="col l6 portfolio-image-container">
                    <a href="http://www.btcentiment.com">
                        <div className="bit-image">
                        </div>
                    </a>
                    </div>
                    <div className="col s12 l6 portfolio-text-container">
               
                            <h1>Bitcoin Sentiment</h1>
                            <h3 className="grey-text"><a className="website" target="_blank" rel="noopener noreferrer" href="http://www.btcentiment.com">btcentiment.com</a></h3>
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
                            <span className="new badge" data-badge-caption="">HTML</span>
                            <span className="new badge" data-badge-caption="">Moment</span>
                            <span className="new badge" data-badge-caption="">Axios</span>
                            </div>
                            </div>
                            </div>
            
                        <p>Paired programming exercise to analyze popular tweets on
            bitcoin's price using natural language progressing to track
correlation between sentiment and bitcoin price.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BitSentiment;
