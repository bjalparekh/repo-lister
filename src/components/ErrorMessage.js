import React, { Component, PropTypes } from 'react';

export default class ErrorMessage extends Component {
  render() {
    return (
      <p className="errorMsg">
        {this.props.message}
      </p>
    );
  }
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
