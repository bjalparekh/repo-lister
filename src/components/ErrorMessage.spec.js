import '../../init';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import ErrorMessage from './ErrorMessage';

describe('Error Message component', () => {
  it('should initially be empty message string', () => {
    const component = ReactTestUtils.renderIntoDocument(<ErrorMessage message="" />);
    expect(component.props.message).to.equal('');
  });
  it('should have error message', () => {
    const component = ReactTestUtils.renderIntoDocument(<ErrorMessage message="No user Found" />);
    expect(component.props.message).to.equal('No user Found');
  });
});
