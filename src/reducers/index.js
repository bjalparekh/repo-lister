import * as types from '../constants/ActionTypes';

const initialState = {
  list: [],
};

const getRepoNameNList = (state, repoInfo) => {
  const repoInfoList = repoInfo.map((item) => {
    return {
      name: item.name,
      htmlUrl: item.html_url,
    };
  });
  return Object.assign({}, state, { list: repoInfoList });
};

export default function repos(state = initialState, action) {
  switch (action.type) {
  case types.RECEIVE_REPO_INFO:
    return getRepoNameNList(state, action.repoInfo);
  default:
    return state;
  }
}
