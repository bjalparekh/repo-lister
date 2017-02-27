import { expect } from 'chai';
import repos from './index';
import * as types from '../constants/ActionTypes';

describe('repo reducer', () => {
  it('should handle initial state', () => {
    expect(repos([], {})).to.deep.equal([]);
  });

  it('should handle RECEIVE_REPO_INFO', () => {
    expect(
      repos([], {
        type: types.RECEIVE_REPO_INFO,
        repoInfo: [{ name: 'ab', html_url: 'ba', username: 'test', url: 'testURL' }],
      })
    ).to.deep.equal({ list: [{ name: 'ab', htmlUrl: 'ba' }] });
  });
});
