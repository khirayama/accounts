import React from 'react';

export default class BudgetSection extends React.Component {
  constructor() {
    super();
  }
  render() {
    let budgetItems = this.props.paymentCategories.map((paymentCategory) => {
      let total = 0;
      this.props.payments.filter(function (payment) {
        if (payment.category === paymentCategory.id) total += +payment.amount;
      });
      return (<li key={paymentCategory.id}>{paymentCategory.name} {paymentCategory.budget} {total}</li>);
    });
    return <ul>{budgetItems}</ul>;
  }
}
