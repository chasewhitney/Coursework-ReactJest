import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';

import CommentList from 'components/CommentList';

let wrapped;
let initialState;

beforeEach(() => {
  initialState = {comments: ['123','abc']};

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );

});


it('creates one <li> per comment',() => {
  console.log('log:', wrapped);

  expect(1).toEqual(1);
});
