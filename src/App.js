import React, { Component } from 'react';
import './App.css';
import IntroPage from './IntroPage'
import BitSentiment from './BitSentiment'
import NetworthJournal from './NetworthJournal'
import Carousel from 'nuka-carousel';
import ContactForm from './ContactForm'

class App extends Component {

  componentDidMount(){
    window.initMaterialize()
  }

  render() {
    return (
      <div className="App">
          <Carousel heightMode='first' framePadding='0px' wrapAround='true' renderCenterRightControls={({ nextSlide }) => (<div onClick={nextSlide} className="next-button"><h5 className="next-text valign-wrapper">View Portfolio<i className="material-icons next-icon">navigate_next</i></h5></div>)}>
            <IntroPage />
            <BitSentiment />
            <NetworthJournal />
            <ContactForm />
          </Carousel>
        
      </div>
    );
  }
}

export default App;
