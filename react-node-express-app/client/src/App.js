import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { initializeSessionData } from './redux/actions/session';

const mapStateToProps = state => ({
  ...state
 });

class App extends Component {
  constructor(){
    super();
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
    };

    this.refreshState = this.refreshState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
  componentDidMount() {
    this.props.dispatch(initializeSessionData(this, "HELLO_ACTION", [], "GET", "/api/hello"));
    this.props.dispatch(initializeSessionData(this, "CMPNY_ACTION", [], "GET", "/api/companies"));

    
  }
  
  refreshState(receiveActionType,message){
    console.log(message);
    if(receiveActionType==="HELLO_ACTION")
      this.setState({response: message.express});
    else if(receiveActionType==="POST_ACTION")
    this.setState({responseToPost: message.message});  

  }

  handleSubmit(e) {
    e.preventDefault();
    var body = {
      "post": this.state.post
    };
    console.log(body);
    this.props.dispatch(initializeSessionData(this, "POST_ACTION", body, "POST", "/api/world"));

  };
render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="title">
            POC - MERN+GraphQL
          </div>
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          
        </header>
        <div className="body">
          <p>{this.state.response}</p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <strong>Post to Server:</strong>
            </p>
            <input
              type="text"
              value={this.state.post}
              onChange={e => this.setState({ post: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.responseToPost}</p>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);