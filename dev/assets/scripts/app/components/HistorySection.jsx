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
    // TODO: property_nameの追加、category_nameの追加、typeの追加
    // TODO: どこでtypeは付与すれば良い？ -> API的にStoreを扱う層が必要？
    // TODO: StoreQueriesが必要なのか....
    // TODO: Universalしたい
    // TODO: StoreとStorageは分けて、StoreがAPI的なメソッドを持った方がよさそうだな
    let histories = this.state.histories.map((history) => {
      return (<li>{history.date} {history.category_name} {history.amount} {history.memo} {history.property_name}</li>);
    });
    return (
      <section>
        <h2>History</h2>
          {histories}
        <ul>
        </ul>
      </section>
    );
  }
}
