export const CREATE_COMMENT = "create_comment";

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment
  }
};
