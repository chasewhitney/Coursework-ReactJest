import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

afterEach(() => {
  wrapped.unmount();
});

it('can fetch a list of comments and display them', () => {
  // Attempt to render entire App
  // Find fetch button and click it
  // Verify that list of comments is rendering to DOM
  const wrapped = mount(<Root><App/></Root>);

});
