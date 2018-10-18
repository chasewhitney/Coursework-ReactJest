import { CREATE_COMMENT } from 'actions/types';

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment
  }
};
