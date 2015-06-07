import React from 'react';
import PropertyAddBtn from './PropertyAddBtn';
import PropertyModal from './PropertyModal';
import PropertyList from './PropertyList';

export default class PropertySection extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <PropertyAddBtn />
        <PropertyModal />
        <PropertyList properties={this.props.properties} />
      </div>
    );
  }
}
