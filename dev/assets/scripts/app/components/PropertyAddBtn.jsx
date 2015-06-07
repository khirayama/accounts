import React from 'react';

export default class PropertyAddBtn extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div id="property-add-btn" onClick={this._onClickPropertyAddBtn}>[add]</div>;
  }
  _onClickPropertyAddBtn() {
    console.log('show modal');
  }
}
