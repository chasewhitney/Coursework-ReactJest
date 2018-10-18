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
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('123');
  expect(wrapped.render().text()).toContain('abc');
});
