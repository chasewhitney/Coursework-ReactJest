import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { changeAuth } from 'actions';


class App extends Component {
  submitAuth(){
    console.log('submitting auth:', !this.props.auth);
    this.props.changeAuth(!this.props.auth);
  }
  renderButton(){
    return (
      <button onClick={this.submitAuth.bind(this)}>{this.props.auth.toString()}</button>
    );
  };

  renderHeader(){
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    )
  }
};

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps, { changeAuth })(App);
