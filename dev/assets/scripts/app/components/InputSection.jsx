import React from 'react';

let MODE = {
  PAYMENT: 'PAYMENT',
  RECEIPT: 'RECEIPT',
  TRANSFER: 'TRANSFER'
};

export default class InputSection extends React.Component {
  constructor() {
    super();
    let diff = 4; // 4hours
    let now = new Date();
    let date = new Date(1900 + now.getYear(), now.getMonth(), now.getDate(), now.getHours() - diff);
    let _year = 1900 + now.getYear();
    let __month = now.getMonth() + 1;
    let _month = (__month < 10) ? ('0' + __month) : __month;
    let _date = now.getDate();

    // TODO: propertyなどselectの初期値設定
    // どうするのがよい？
    this.state = {
      mode: MODE.PAYMENT,
      amount: '',
      property: '',
      from: '',
      to: '',
      date: '',
      category: '',
      memo: ''
    };
  }
  componentDidMount() {
    // FIXME: 初期値設定にpropsが使えず苦肉の策。getInitialStateならいける？
    let diff = 4; // 4hours
    let now = new Date();
    let date = new Date(1900 + now.getYear(), now.getMonth(), now.getDate(), now.getHours() - diff);
    let _year = 1900 + now.getYear();
    let __month = now.getMonth() + 1;
    let _month = (__month < 10) ? ('0' + __month) : __month;
    let _date = now.getDate();

    this.setState({
      property: this.props.properties[0].id,
      from: this.props.properties[0].id,
      to: this.props.properties[0].id,
      date: `${_year}-${_month}-${_date}`,
      category: this.props.receiptCategories[0].id,
    });
  }
  render() {
    let cx = function (obj) {
      let classes = [];
      for (let className in obj) {
        if (obj[className]) classes.push(className);
        return classes.join(' ');
      }
    };
    let properties = this.props.properties.map(function (property) {
      return <option key={property.id} value={property.id}>{property.name}</option>
    });
    let categories = [];
    let form;

    switch (this.state.mode) {
      case MODE.PAYMENT:
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
      case MODE.RECEIPT:
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
      case MODE.TRANSFER:
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
          <li onClick={this._onClickTab.bind(this, MODE.PAYMENT)} className={cx({'active': (this.state.mode === MODE.PAYMENT)})}>支出</li>
          <li onClick={this._onClickTab.bind(this, MODE.RECEIPT)} className={cx({'active': (this.state.mode === MODE.RECEIPT)})}>収入</li>
          <li onClick={this._onClickTab.bind(this, MODE.TRANSFER)} className={cx({'active': (this.state.mode === MODE.TRANSFER)})}>振替</li>
        </ul>
        {form}
      </div>
    );
  }
  _onClickTab(MODE) {
    this.setState({mode: MODE});
  }
  _onChange(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
  _onClickAdd(event) {
    event.preventDefault();
    console.log(this.state);
    // TODO: action叩く
  }
}
