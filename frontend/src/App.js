import React, { Component } from 'react';
import './App.css';
import IntroPage from './IntroPage'
import BitSentiment from './BitSentiment'
import NetworthJournal from './NetworthJournal'
import Carousel from 'nuka-carousel';
import ContactForm from './ContactForm'
import { Switch, Link, Route, withRouter } from 'react-router-dom'

class App extends Component {

  constructor() {
    super();
    this.state = {
      slideIndex: 0
    }
  }
  

  componentDidMount(){
    window.initMaterialize()
  }

  clickOnContactMe = () =>{
    this.setState({
      slideIndex: 3
    })
  }

  render() {
    {console.log(this.state.slideIndex)}
    return (
      <Switch>
      <div className="App">

          <Carousel heightMode='first' framePadding='0px' wrapAround='true' slideIndex={this.state.slideIndex} afterSlide={slideIndex => this.setState({ slideIndex })} renderCenterRightControls={({ nextSlide }) => (<Link to={this.state.slideIndex === 0 ? '/bitcoin-sentiment': this.state.slideIndex === 1 ? '/networth-journal' : this.state.slideIndex === 2 ? '/contact-me' : '/' } ><div onClick={nextSlide} className="next-button"><h5 className="next-text valign-wrapper">{this.state.slideIndex === 0 ? 'View Portfolio': this.state.slideIndex === 1 ? 'Next' : this.state.slideIndex === 2 ? 'Get in Touch' : 'Home' }<i className="material-icons next-icon">navigate_next</i></h5></div></Link>)}>
            <Route path="/" render={() => { return <IntroPage clickOnContactMe={this.clickOnContactMe} /> }} />
            <Route path="/bitcoin-sentiment" render={() => { return <BitSentiment /> }} />
            <Route path="/networth-journal" render={() => { return <NetworthJournal /> }} />
            <Route path="/contact-me" render={() => { return <ContactForm /> }} />
          </Carousel>
      </div>
      </Switch>
    );
  }
}

export default App;
