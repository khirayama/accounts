import React from 'react';
import PropertyActions from '../actions/PropertyActions';

export default class PropertyItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      name: '',
      amount: ''
    };
  }
  render() {
    let li;
    if (this.state.isEditing) {
      li = (
        <li>
          <input type="text" value={this.state.name} onChange={this._onChangeName.bind(this)}/>
          <input type="number" value={this.state.amount} onChange={this._onChangeAmount.bind(this)}/>
          <button onClick={this._onClickDoneBtn.bind(this)} type="button">DONE</button>
        </li>
      );
    } else {
      li = (
        <li>
          <label>{this.props.property.name}</label>
          <label>{this.props.property.amount}</label>
          <button onClick={this._onClickEditBtn.bind(this)} type="button">EDIT</button>
          <button onClick={this._onClickDeleteBtn.bind(this)} type="button">DELETE</button>
        </li>
      );
    }
    return li;
  }
  _onClickDeleteBtn() {
    PropertyActions.destroy(this.props.property.id);
  }
  _onClickEditBtn() {
    this.setState({
      isEditing: true,
      name: this.props.property.name,
      amount: this.props.property.amount
    });
  }
  _onChangeName(event) {
    this.setState({name: event.target.value});
  }
  _onChangeAmount(event) {
    this.setState({amount: event.target.value});
  }
  _onClickDoneBtn() {
    PropertyActions.update(this.props.property.id, this.state.name, this.state.amount);
    this.setState({isEditing: false});
  }
}
