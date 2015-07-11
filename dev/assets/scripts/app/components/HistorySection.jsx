import React from 'react';
import PaymentCategoryStore from '../stores/PaymentCategoryStore';
import PaymentActionCreators from '../actions/PaymentActionCreators';

export default class HistorySection extends React.Component {
  constructor() {
    super();
  }
  render() {
    let _histories = (this.props.payments.concat(this.props.receipts, this.props.transfers)).sort((a, b) => {
      if (a.date > b.date) return -1;
      if (b.date > a.date) return 1;
      return 0;
    });

    let histories = _histories.map((history) => {
      // TODO: ここらへん定数化して共通化。InputSectionにもあるはず
      switch (history.type) {
        case 'payment':
        case 'receipt':
          return (
            <li key={history.id} className={"history-type-" + history.type}>
              {history.date} {history.amount} {history.category_name} {history.memo} {history.property_name}
              <button onClick={this._onClickDelete.bind(this, history)}>DELETE</button>
            </li>
          );
          break;
        case 'transfer':
          return (
            <li key={history.id} className={"history-type-" + history.type}>
              {history.date} {history.amount} {history.memo} {history.from_name} -> {history.to_name}
              <button>DELETE</button>
            </li>
          );
          break;
        default:
          break;
      }
    });
    return (
      <section>
        <ul>{histories}</ul>
      </section>
    );
  }
  _onClickDelete(history) {
    switch (history.type) {
      case 'payment':
        PaymentActionCreators.destroy(history);
        break;
      default:
        break;
    }
  }
}
