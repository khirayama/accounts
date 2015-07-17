import React from 'react';

export default class BudgetSection extends React.Component {
  constructor() {
    super();
  }
  render() {
    // TODO: 日割りのときは分割など計算の追加 - state?
    // TODO: もう一度全体として、どこまでstateか、propsか検討した方がよいかも
    // TODO: お前の作業はここだぜ。脳みそ動かせ
    let budgetItems = this.props.paymentCategories.map((paymentCategory) => {
      let total = 0;
      this.props.payments.filter(function (payment) {
        if (payment.category === paymentCategory.id) total += +payment.amount;
      });
      return (<li>{paymentCategory.name} {paymentCategory.budget} {total}</li>);
    });
    return <ul>{budgetItems}</ul>;
  }
}
