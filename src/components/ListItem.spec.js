import '../../init';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import ListItem from './ListItem';

describe('List Item component', () => {
  it('should have name and link props', () => {
    const component = ReactTestUtils.renderIntoDocument(<ListItem name="repo name" link="http://test.com" />);
    expect(component.props.name).to.equal('repo name');
    expect(component.props.link).to.equal('http://test.com');
  });
});
