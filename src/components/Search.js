import React, { Component, PropTypes } from 'react';

import { fetchRepoInfoForUser } from '../middleware';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.searchClickHandler = this.searchClickHandler.bind(this);
  }

  render() {
    return (
      <div className="search-container">
        <input type="text" ref="search" placeholder="Search user repo" />
        <button onClick={this.searchClickHandler} ref="searchBtn">Search</button>
      </div>
    );
  }

  searchClickHandler() {
    fetchRepoInfoForUser(this.refs.search.value).then((json) => {
      this.props.onSuccess(json);
    }).catch((status) => {
      let errorMsg = status === 404 ? 'The Github "' + this.refs.search.value + '" user does not exist' : 'Github API does not respond';
      this.props.onError(errorMsg);
    });
  }
}

Search.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
};
