import React from 'react';
import CommentReducer from 'reducers/reducer_CreateComment';
import { CREATE_COMMENT } from 'actions/types';

it('properly hands off actions with type CREATE_COMMENT',() => {
  const action = {
    type: CREATE_COMMENT,
    payload: "new comment"
  };

  expect(CommentReducer([], action)).toEqual(["new comment"]);
});

it('properly handles action with unknown type',() => {
  expect(CommentReducer([1], {})).toEqual([1]);
});
