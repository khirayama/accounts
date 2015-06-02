import Component from '../../framework/Component';

export default class PropertyItem extends Component {
  constructor(property) {
    super('template', {}, {
      property: property
    });
  }
  handleEvents() {
    this.on('click', '.edit-btn', () => {
      // show Modal
      console.log('PropertyActions.updateAmount()');
    });
  }
  template() {
    return (
      `<li>
        <label>${this.props.property.name}</label>
        <label>${this.props.property.amount}</label>
        <div class="edit-btn">[edit]</div>
      </li>`
    );
  }
}
