import React from 'react';
import PropertyActionis from '../actions/PropertyActions';

export default class PropertyModal extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      amount: ''
    };
  }
  render() {
    return (
      <div id="property-modal">
        <form id="property-form">
          <div id="property-name">
            <input type="text"
                   name="name"
                   value={this.state.name}
                   onChange={this._onChangeName.bind(this)} />
          </div>
          <div id="property-amount">
            <input type="number"
                   name="amount"
                   value={this.state.amount}
                   onChange={this._onKeyDownAmount.bind(this)} />
          </div>
          <div id="property-submit-btn"><input type="submit" value="[submit]" onClick={this._onSubmitNewProperty.bind(this)} /></div>
        </form>
      </div>
    );
  }
  _onSubmitNewProperty(event) {
    event.preventDefault();
    PropertyActionis.create(this.state.name, this.state.amount);
    this.setState({
      name: '',
      amount: ''
    });
  }
  _onChangeName(event) {
    this.setState({name: event.target.value});
  }
  _onKeyDownAmount(event) {
    this.setState({amount: event.target.value});
  }
}
