import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  render() {
    return(
      <div>
        <div>Comment List</div>
        <ul>
          {this.props.comments.map(comment => <li key={comment}>{comment}</li>)}
        </ul>
      </div>
    );
  };
};

function mapPropsToState({ comments }) {
  return { comments };
};

export default connect(mapPropsToState)(CommentList);
