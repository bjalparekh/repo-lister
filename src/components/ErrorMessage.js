import React, { PureComponent, PropTypes } from 'react';

export default class ErrorMessage extends PureComponent {
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
