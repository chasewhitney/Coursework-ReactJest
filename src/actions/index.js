import { CREATE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';
import axios from 'axios';

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment
  }
};

export function fetchComments() {
  const request = axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload: request
  }
}

export function changeAuth(isLoggedIn) {
  console.log('in change auth with:', isLoggedIn);
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}
