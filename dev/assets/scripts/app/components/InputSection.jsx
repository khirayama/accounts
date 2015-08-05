import React from 'react';
import PaymentActionCreators from '../actions/PaymentActionCreators';
import ReceiptActionCreators from '../actions/ReceiptActionCreators';
import TransferActionCreators from '../actions/TransferActionCreators';

let _MODE = {
  PAYMENT: 'PAYMENT',
  RECEIPT: 'RECEIPT',
  TRANSFER: 'TRANSFER'
};

export default class InputSection extends React.Component {
  constructor(props) {
    super(props);
    let diff = 4; // 4hours
    let now = new Date();
    let date = new Date(1900 + now.getYear(), now.getMonth(), now.getDate(), now.getHours() - diff);
    let _year = 1900 + now.getYear();
    let __month = now.getMonth() + 1;
    let _month = (__month < 10) ? ('0' + __month) : __month;
    let __date = now.getDate();
    let _date = (__date < 10) ? ('0' + __date) : __date;

    // TODO: propertyなどselectの初期値設定
    // FIXME: 整理する
    if (this.props.properties.length >= 1) {
      this.state = {
        mode: _MODE.PAYMENT,
        amount: '',
        property: this.props.properties[0].id,
        from: this.props.properties[0].id,
        to: '',
        date: `${_year}-${_month}-${_date}`,
        category: this.props.paymentCategories[0].id,
        memo: ''
      };
    } else {
      this.state = {
        mode: _MODE.PAYMENT,
        amount: '',
        property: '',
        from: '',
        to: '',
        date: `${_year}-${_month}-${_date}`,
        category: '',
        memo: ''
      };
    }
  }
  render() {
    let cx = (obj) => {
      let classes = [];
      for (let className in obj) {
        if (obj[className]) classes.push(className);
        return classes.join(' ');
      }
    };
    let properties = this.props.properties.map((property) => {
      return <option key={property.id} value={property.id}>{property.name}</option>;
    });
    let categories = [];
    let form;

    switch (this.state.mode) {
      case _MODE.PAYMENT:
        categories = this.props.paymentCategories.map(function (category) {
          return <option key={category.id} value={category.id}>{category.name}</option>
        });
        form = (
          <form>
            <input type="text" name="amount" value={this.state.amount} onChange={this._onChange.bind(this)}/>
            <select name="property" value={this.state.property} onChange={this._onChange.bind(this)}>{properties}</select>
            <input type="date" name="date" value={this.state.date} onChange={this._onChange.bind(this)}/>
            <select name="category" value={this.state.category} onChange={this._onChange.bind(this)}>{categories}</select>
            <input type="text" name="memo" value={this.state.memo} onChange={this._onChange.bind(this)}/>
            <button type="submit" onClick={this._onClickAdd.bind(this)}>ADD</button>
          </form>
        );
        break;
      case _MODE.RECEIPT:
        categories = this.props.receiptCategories.map(function (category) {
          return <option key={category.id} value={category.id}>{category.name}</option>
        });
        form = (
          <form>
            <input type="text" name="amount" value={this.state.amount} onChange={this._onChange.bind(this)}/>
            <select name="property" value={this.state.property} onChange={this._onChange.bind(this)}>{properties}</select>
            <input type="date" name="date" value={this.state.date} onChange={this._onChange.bind(this)}/>
            <select name="category" value={this.state.category} onChange={this._onChange.bind(this)}>{categories}</select>
            <input type="text" name="memo" value={this.state.memo} onChange={this._onChange.bind(this)}/>
            <button type="submit" onClick={this._onClickAdd.bind(this)}>ADD</button>
          </form>
        );
        break;
      case _MODE.TRANSFER:
        form = (
          <form>
            <input type="text" name="amount" value={this.state.amount} onChange={this._onChange.bind(this)}/>
            <select name="from" value={this.state.from} onChange={this._onChange.bind(this)}>{properties}</select>
            <select name="to" value={this.state.to} onChange={this._onChange.bind(this)}>{properties}</select>
            <input type="date" name="date" value={this.state.date} onChange={this._onChange.bind(this)}/>
            <input type="text" name="memo" value={this.state.memo} onChange={this._onChange.bind(this)}/>
            <button type="submit" onClick={this._onClickAdd.bind(this)}>ADD</button>
          </form>
        );
        break;
      default:
        break;
    }
    return (
      <div>
        <ul className="tabs-list">
          <li onClick={this._onClickTab.bind(this, _MODE.PAYMENT)} className={cx({'active': (this.state.mode === _MODE.PAYMENT)})}>支出</li>
          <li onClick={this._onClickTab.bind(this, _MODE.RECEIPT)} className={cx({'active': (this.state.mode === _MODE.RECEIPT)})}>収入</li>
          <li onClick={this._onClickTab.bind(this, _MODE.TRANSFER)} className={cx({'active': (this.state.mode === _MODE.TRANSFER)})}>振替</li>
        </ul>
        {form}
      </div>
    );
  }
  _onClickTab(MODE) {
    let state = {mode: MODE};
    switch (MODE) {
      case _MODE.PAYMENT:
        state.category = this.props.paymentCategories[0].id;
        break;
      case _MODE.RECEIPT:
        state.category = this.props.receiptCategories[0].id;
        break;
      case _MODE.TRANSFER:
        state.from = this.props.properties[0].id;
        state.to = this.props.properties[1].id;
        break;
    }
    this.setState(state);
  }
  _onChange(event) {
    let state = {};
    let name = event.target.name;
    let value = event.target.value;
    state[name] = value;
    this.setState(state);
  }
  _onClickAdd(event) {
    event.preventDefault();
    switch (this.state.mode) {
      case _MODE.PAYMENT:
        let payment = {
          amount: this.state.amount,
          property: this.state.property,
          date: this.state.date,
          category: this.state.category,
          memo: this.state.memo
        };
        PaymentActionCreators.create(payment);
        break;
      case _MODE.RECEIPT:
        let receipt = {
          amount: this.state.amount,
          property: this.state.property,
          date: this.state.date,
          category: this.state.category,
          memo: this.state.memo
        };
        ReceiptActionCreators.create(receipt);
        break;
      case _MODE.TRANSFER:
        let transfer = {
          amount: this.state.amount,
          from: this.state.from,
          to: this.state.to,
          date: this.state.date,
          memo: this.state.memo
        };
        TransferActionCreators.create(transfer);
        break;
    }
  }
}
