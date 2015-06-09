import React from 'react';

export default class PropertyItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <li>
        <label>{this.props.property.name}</label>
        <label>{this.props.property.amount}</label>
      </li>
    );
  }
}
