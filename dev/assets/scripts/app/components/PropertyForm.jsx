import React from 'react';
import PropertyActions from '../actions/PropertyActions';

export default class PropertyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      amount: ''
    };
  }
  render() {
    return (
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
                 onChange={this._onChangeAmount.bind(this)} />
        </div>
        <div id="property-submit-btn"><button type="button" onClick={this._onSubmitNewProperty.bind(this)}>SUBMIT</button></div>
      </form>
    );
  }
  _onSubmitNewProperty() {
    PropertyActions.create(this.state.name, this.state.amount);
    this.setState({
      name: '',
      amount: ''
    });
  }
  _onChangeName(event) {
    this.setState({name: event.target.value});
  }
  _onChangeAmount(event) {
    this.setState({amount: event.target.value});
  }
}
