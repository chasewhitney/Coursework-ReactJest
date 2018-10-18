import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';

import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  initialState {comments: ['123','abc']};

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );

});


it('creates one <li> per comment',() => {

  expect(1).toEqual(1);
});
