import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { receiveRepoInfoForUser } from '../actions';

import Search from '../components/Search';
import List from '../components/List';
import ErrorMessage from '../components/ErrorMessage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  componentWillUpdate(nextProps) {
    if(this.props.list !== nextProps.list && nextProps.list.length === 0 && this.state.message === '') {
      this.setState({
        message: 'Github user has no repos',
      });
    }
  }

  render() {
    return (
      <div>
        <Search onSuccess={this.onSuccess} onError={this.onError} />
        <List list={this.props.list} />
        <ErrorMessage message={this.state.message} />
      </div>
    );
  }

  onSuccess(json) {
    this.setState({
      message: '',
    });
    this.props.dispatch(receiveRepoInfoForUser(json));
  }

  onError(message) {
    this.setState({
      message,
    });
    this.props.dispatch(receiveRepoInfoForUser([]));
  }
}

App.propTypes = {
  list: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {return { list: state.list };};

export default connect(mapStateToProps)(App);
