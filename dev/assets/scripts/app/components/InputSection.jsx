import React from 'react';

let TAB = {
  PAYMENT: 'PAYMENT',
  RECEIPT: 'RECEIPT',
  TRANSFER: 'TRANSFER'
};

export default class InputSection extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: TAB.PAYMENT,
      amount: '',
      property: '',
      data: '',
      category: '',
      memo: ''
    };
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
    switch (this.state.tab) {
      case TAB.PAYMENT:
        categories = this.props.paymentCategories.map(function (category) {
          return <option key={category.id} value={category.id}>{category.name}</option>
        });
        form = (
          <form>
            <input type="text" name="amount" value={this.state.amount} onChange={this._onChangeAmount.bind(this)}/>
            <select name="property" value={this.state.property} onChange={this._onChangeProperty.bind(this)}>{properties}</select>
            <input type="date" name="date" value={this.state.date} onChange={this._onChangeDate.bind(this)}/>
            <select name="category" value={this.state.category} onChange={this._onChangeCategory.bind(this)}>{categories}</select>
            <input type="text" name="memo" value={this.state.memo} onChange={this._onChangeMemo.bind(this)}/>
            <button type="submit" onClick={this._onClickAdd.bind(this)}>ADD</button>
          </form>
        );
        break;
      case TAB.RECEIPT:
        categories = this.props.receiptCategories.map(function (category) {
          return <li key={category.id}>{category.name}</li>
        });
        form = (
          <form>
            <input type="text" name="amount" />
            <select name="property">{properties}</select>
            <input type="date" name="date"/>
            <select name="category">{categories}</select>
            <input type="text" name="memo" />
            <button type="submit">ADD</button>
          </form>
        );
        break;
      case TAB.TRANSFER:
        form = (
          <form>
            <input type="text" name="amount" />
            <select name="property">{properties}</select>
            <select name="property">{properties}</select>
            <input type="date" name="date"/>
            <input type="text" name="memo" />
            <button type="submit">ADD</button>
          </form>
        );
        break;
      default:
        break;
    }
    return (
      <div>
        <ul className="tabs-list">
          <li onClick={this._onClickTab.bind(this, TAB.PAYMENT)} className={cx({'active': (this.state.tab === TAB.PAYMENT)})}>支出</li>
          <li onClick={this._onClickTab.bind(this, TAB.RECEIPT)} className={cx({'active': (this.state.tab === TAB.RECEIPT)})}>収入</li>
          <li onClick={this._onClickTab.bind(this, TAB.TRANSFER)} className={cx({'active': (this.state.tab === TAB.TRANSFER)})}>振替</li>
        </ul>
        {form}
      </div>
    );
  }
  _onClickTab(TAB) {
    this.setState({
      tab: TAB
    });
    console.log(this, TAB);
  }
  _onChangeAmount(event) {
    this.setState({amount: event.target.value});
  }
  _onChangeProperty(event) {
    this.setState({property: event.target.value});
  }
  _onChangeDate(event) {
    this.setState({date: event.target.value});
  }
  _onChangeCategory(event) {
    this.setState({category: event.target.value});
  }
  _onChangeMemo(event) {
    this.setState({memo: event.target.value});
  }
  _onClickAdd(event) {
    event.preventDefault();
    console.log(this.state);
  }
}
