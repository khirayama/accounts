import React from 'react';

export default class PropertyItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <li>{this.props.property.name}</li>;
  }
}
