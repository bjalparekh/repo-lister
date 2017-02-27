import React, { Component, PropTypes } from 'react';

export default class ListItem extends Component {
  render() {
    return (<li>
      <dl>
        <dd>Repo name:</dd><dt>{this.props.name}</dt></dl>
      <dl>
        <dd>Repo link:</dd><dt><a href={this.props.link} target="_blank">{this.props.link}</a></dt>
      </dl>
    </li>);
  }
}

ListItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};
