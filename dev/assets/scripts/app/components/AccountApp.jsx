import React from 'react';
import PropertyStore from '../stores/PropertyStore';
import PropertySection from './PropertySection';

export default class AccountApp extends React.Component {
  constructor() {
    super();
    this.state = {
      properties: PropertyStore.getAll()
    };
  }
  componentDidMount() {
    PropertyStore.addChangeListener(this._onChange.bind(this));
  }
  // TODO: componentWillUnmount書く
  render() {
    return (
      <div>
        <PropertySection properties={this.state.properties} />
      </div>
    );
  }
  _onChange() {
    this.setState({
      properties: PropertyStore.getAll()
    });
  }
}
