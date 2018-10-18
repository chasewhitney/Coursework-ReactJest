import React from 'react';
import { CREATE_COMMENT } from 'actions/types';
import { createComment } from 'actions';

describe('createComment', () => {

  let action;

  beforeEach(() => {
    action = createComment("abc");
  });

  it('returns proper type',() => {
    expect(action.type).toEqual(CREATE_COMMENT);
  })

  it('returns proper payload',() => {
    expect(action.payload).toEqual("abc");
  })

})
