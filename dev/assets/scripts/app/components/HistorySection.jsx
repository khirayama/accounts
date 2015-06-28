import React from 'react';

export default class HistorySection extends React.Component {
  constructor() {
    super();
    this.state = {
      histories: []
    };
  }
  componentDidMount() {
    this.setState({
      histories: (this.props.payments.concat(this.props.receipts, this.props.transfers)).sort(function (a, b) {
        if (a.date > b.date) return 1;
        if (b.date > a.date) return -1;
        return 0;
      })
    });
  }
  render() {
    console.log(this.state.histories);
    return (
      <h2>History</h2>
    );
  }
}
