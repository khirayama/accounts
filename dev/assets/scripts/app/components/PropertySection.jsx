import React from 'react';
import PropertyAddBtn from './PropertyAddBtn';
import PropertyForm from './PropertyForm';
import PropertyList from './PropertyList';

export default class PropertySection extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <PropertyAddBtn />
        <PropertyForm />
        <PropertyList properties={this.props.properties} />
      </div>
    );
  }
}
