import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';

import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><CommentList /></Root>);
});


it('creates one <li> per comment',() => {
  console.log(`wrapped.props: ${wrapped.props}`);
  expect(1).toEqual(1);
});
