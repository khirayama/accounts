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
        <button type="button" name="edit" value="edit">[EDIT]</button>
        <button type="button" name="delete" value="delete">[DELETE]</button>
      </li>
    );
  }
}
