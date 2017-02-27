import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import { fetchRepoInfoForUser } from './index';

describe('Fetch the github url', () => {
  it('should fetch the user repos if the user exists', () => {
    fetchMock.mock('https://api.github.com/users/bjalparekh/repos', { hello: 'world' });
    fetchRepoInfoForUser('bjalparekh').then((data) => {
      expect(data).to.deep.equal({ hello: 'world' });
    });
    fetchMock.restore();
  });
});
