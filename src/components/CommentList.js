import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments(){
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    });
  }

  render() {
    return(
      <div>
        <div>Comment List</div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  };
};

function mapPropsToState({ comments }) {
  return { comments };
};

export default connect(mapPropsToState)(CommentList);
