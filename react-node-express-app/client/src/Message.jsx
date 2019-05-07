import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    ...state
   });
export default class Message extends React.Component {


render(){
    let self = this;
    return(
      <div className="Message">
        {self.props.data}
      </div>
    );
}


}
