import React from 'react';
import Message from './Message'
import { connect } from 'react-redux';
import { initializeSessionData } from './redux/actions/session';

const mapStateToProps = state => ({
    ...state
   });
export default class MessageBoard extends React.Component {

    constructor(){
        super();
        this.state={
            messages: []
        }
    }

    componentDidMount() {
        this.props.dispatch(initializeSessionData(this, "FETCH_MESSAGES", [], "GET", "/api/messages"));
      }

    refreshState(receiveActionType,message){
        console.log(receiveActionType);
        console.log(JSON.stringify(message));
        if(receiveActionType==="FETCH_MESSAGES")
            this.setState({messages: message.messages});
        

    }

    render(){
        let self = this;
        return(
        <div>
            <h1>Message Board</h1>
            {self.state.messages.map( (key) => {
                return (
                    <div className="Message-board">
                        <Message data={key}/>
                    </div>
                );
            })}
        </div>
        );
    }


}
