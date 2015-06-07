import React from 'react';
import PropertyItem from './PropertyItem';

export default class PropertyList extends React.Component {
  constructor() {
    super();
  }
  render() {
    let allProperties = this.props.properties;
    let properties = [];
    for (let i = 0; i < allProperties.length; i++) {
      properties.push(<PropertyItem key={i} property={allProperties[i]} />);
    }
    return <ul id="property-list">{properties}</ul>;
  }
}
