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
    console.log(`handleSubmit submitting: ${this.state.comment}`);
    this.props.createComment(this.state.comment);
    this.setState({ comment: '' });
  }

  handleFetch = () => {
    console.log('handling fetch');
    this.props.fetchComments();
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
        <button onClick={this.handleFetch}>Fetch Comments</button>
      </div>
    )
  }
}

export default connect(null, actions)(CommentBox);
