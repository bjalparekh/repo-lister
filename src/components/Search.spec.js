import '../../init';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import sinon, {mock} from 'sinon';

import * as fetcher from '../middleware';
import Search from './Search';

describe('Search component', () => {
  it('should have on success and on error props as callback', () => {
    const component = ReactTestUtils.renderIntoDocument(<Search onError={() => {}} onSuccess={() => {}} />);
    expect(component.props.onError).to.deep.equal(function onError() {});
    expect(component.props.onSuccess).to.deep.equal(function onSuccess() {});
  });
  it('should call searchClickHandler on button click', () => {
    const cb = sinon.stub(fetcher, 'fetchRepoInfoForUser').returns(Promise.resolve({}));
    const component = ReactTestUtils.renderIntoDocument(<Search onError={() => {}} onSuccess={() => {}} />);

    const btn = component.refs.searchBtn;
    ReactTestUtils.Simulate.click(btn);
    expect(cb.calledOnce).to.be.true;
    cb.restore();
  });
});
