import * as types from '../constants/ActionTypes';

export const receiveRepoInfoForUser = (repoInfo) => {
  return {
    type: types.RECEIVE_REPO_INFO,
    repoInfo,
  };
};
