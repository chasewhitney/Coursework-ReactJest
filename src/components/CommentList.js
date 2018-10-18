import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  render() {
    return(
      <div>
        <div>Comment List</div>
        {this.props.comments.map(comment => <p key={comment}>{comment}</p>)}
      </div>
    );
  };
};

function mapPropsToState({ comments }) {
  return { comments };
};

export default connect(mapPropsToState)(CommentList);
