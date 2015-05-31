import Component from '../../framework/Component';

export default class PropertyItem extends Component {
  constructor(property) {
    super('template', {}, {
      property: property
    });
  }
  handleEvents() {
    this.on('click', '.edit-btn', () => {
      console.log('PropertyAction.updateAmount()');
    });
  }
  template() {
    let property = this.props.property;
    return (
      `<li>
        <label>${property.name} / ${property.amount}</label>
        <div class="edit-btn">[編集]</div>
      </li>`
    );
  }
}
