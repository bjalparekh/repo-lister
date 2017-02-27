import '../../init';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import List from './List';

describe('List component', () => {
  it('should initially have list props empty', () => {
    const component = ReactTestUtils.renderIntoDocument(<List list={[]} />);
    expect(component.props.list).to.deep.equal([]);
  });
  it('should have list props', () => {
    const component = ReactTestUtils.renderIntoDocument(<List list={[{ a: 'ab', b: 'ba' }]} />);
    expect(component.props.list).to.deep.equal([{ a: 'ab', b: 'ba' }]);
  });
  it('should have listItem component', () => {
    const component = ReactTestUtils.renderIntoDocument(<List list={[]} />);
    const listItemComponent = component.refs.listItem;
    expect(listItemComponent).to.not.equal(null);
  });
});
