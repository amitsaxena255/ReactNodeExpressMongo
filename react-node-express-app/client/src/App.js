import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { initializeSessionData } from './redux/actions/session';
import MessageBoard from './MessageBoard'

const mapStateToProps = state => ({
  ...state
 });

class App extends Component {
  constructor(){
    super();
    this.state = {
      
    };

    
}
  
  
  
render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <MessageBoard {...this.props}/>
      </div>

    </div>
    );
  }
}
export default connect(mapStateToProps)(App);