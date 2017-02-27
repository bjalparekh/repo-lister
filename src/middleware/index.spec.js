import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import { fetchRepoInfoForUser } from './index';

describe('Fetch the github url', ()=>{
    it('should fetch the user repos if the user exists', ()=>{
        fetchMock.get('*', {hello: 'world'});
        fetchRepoInfoForUser().then(function(data) {
            expect(data).to.equal({hello: 'world'})
        }); 
        fetchMock.restore();
    });
});
