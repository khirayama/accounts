import React from 'react';
import PaymentCategoryStore from '../stores/PaymentCategoryStore';

export default class HistorySection extends React.Component {
  constructor() {
    super();
    this.state = {
      histories: []
    };
  }
  componentDidMount() {
    this.setState({
      histories: (this.props.payments.concat(this.props.receipts, this.props.transfers)).sort((a, b) => {
        if (a.date > b.date) return 1;
        if (b.date > a.date) return -1;
        return 0;
      })
    });
  }
  render() {
    let histories = this.state.histories.map((history) => {
      return (<li key={history.id} className={"history-type-" + history.type}>{history.date} {history.category_name} {history.amount} {history.memo} {history.property_name}</li>);
    });
    return (
      <section>
        <ul>{histories}</ul>
      </section>
    );
  }
}
