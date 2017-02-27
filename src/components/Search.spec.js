import '../../init';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import sinon from 'sinon';

import * as fetcher from '../middleware';
import Search from './Search';

describe('Search component', () => {
  it('should have input and button', () => {
    const component = ReactTestUtils.renderIntoDocument(
      <Search onError={() => {}} onSuccess={() => {}} />);
    expect(component.refs.search).to.not.equal(null);
    expect(component.refs.searchBtn).to.not.equal(null);
  });

  it('should call searchClickHandler on button click', () => {
    const cb = sinon.stub(fetcher, 'fetchRepoInfoForUser').returns(Promise.resolve({}));
    const component = ReactTestUtils.renderIntoDocument(
      <Search onError={() => {}} onSuccess={() => {}} />);

    const btn = component.refs.searchBtn;
    ReactTestUtils.Simulate.click(btn);
    expect(cb.calledOnce).to.be.true;
    cb.restore();
  });
});
