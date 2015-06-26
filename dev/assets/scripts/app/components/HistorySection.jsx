import React from 'react';

export default class HistorySection extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props);
    return (
      <h2>History</h2>
    );
  }
}
