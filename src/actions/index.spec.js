import { expect } from 'chai';
import * as actions from './index';
import * as types from '../constants/ActionTypes';

describe('Repo actions -', () => {
  it('receiveRepoInfo should create RECEIVE_REPO_INFO action', () => {
    expect(actions.receiveRepoInfoForUser([{ a: 'ab', b: 'ba' }])).to.deep.equal({
      type: types.RECEIVE_REPO_INFO,
      repoInfo: [{ a: 'ab', b: 'ba' }],
    });
  });
});
