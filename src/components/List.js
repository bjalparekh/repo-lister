import React, { Component, PropTypes } from 'react';

import ListItem from './ListItem';

export default class List extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map((listItem, index) =>
          <ListItem key={index} name={listItem.name} link={listItem.htmlUrl} ref="listItem" />
        )}
      </ul>
    );
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired,
};
