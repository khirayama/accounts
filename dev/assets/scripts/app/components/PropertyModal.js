import React from 'react';

export default class PropertyModal extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'aaa',
      amount: '1111'
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
          <div id="property-submit-btn"><input type="submit" value="[submit]" onClick={this._onSubmitNewProperty} /></div>
        </form>
      </div>
    );
  }
  _onSubmitNewProperty(event) {
    event.preventDefault();
    console.log('add new property');
  }
  _onChangeName(event) {
    this.setState({name: event.target.value});
  }
  _onKeyDownAmount(event) {
    console.log(this, event);
    // this.setState({amount: 222});
  }
}
