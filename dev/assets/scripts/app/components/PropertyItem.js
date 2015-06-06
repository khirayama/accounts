import Component from '../../framework/Component';
import PropertyActions from '../actions/PropertyActions';

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
    this.on('click', '.destroy-btn', () => {
      let id = this.props.property.id;
      PropertyActions.destroy(id);
    });
  }
  template() {
    return (
      `<li>
        <label>${this.props.property.name}</label>
        <label>${this.props.property.amount}</label>
        <div class="edit-btn">[edit]</div>
        <div class="destroy-btn">[destroy]</div>
      </li>`
    );
  }
}
