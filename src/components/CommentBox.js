import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: ''};

  handleChange = event => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state.comment);
    this.setState({ comment: '' });
  }

  handleFetch = () => {
    this.props.fetchComments();
  }

  componentDidMount(){
    this.shouldNavigateAway();
  }

  componentDidUpdate(){
    this.shouldNavigateAway();
  }

  shouldNavigateAway(){
    if(!this.props.auth){
      console.log('User not signed in, back you go');
      this.props.history.push('/');
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange}/>
          <div>
            <button type="submit">Submit content</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.handleFetch}>Fetch Comments</button>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(CommentBox);
