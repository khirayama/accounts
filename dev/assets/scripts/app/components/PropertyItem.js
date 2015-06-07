import Component from '../../framework/Component';
import PropertyActions from '../actions/PropertyActions';

export default class PropertyItem extends Component {
  constructor(property) {
    super('template', {
      isEditing: false
    }, {
      property: property
    });
  }
  handleEvents() {
    this.on('click', '.edit-btn', () => {
      // show Modal
      this.setState({
        isEditing: true
      });
      console.log('PropertyActions.updateAmount()');
    });
    this.on('click', '.destroy-btn', () => {
      let id = this.props.property.id;
      PropertyActions.destroy(id);
    });
  }
  template() {
    return (
      `<li>${this.itemTemplate()}</li>`
    );
  }
  itemTemplate() {
    let itemTemplate = '';
    if (this.state.isEditing) {
      itemTemplate =
        `<form>
        <input type="text" value="${this.props.property.name}">
        <input type="number" value="${this.props.property.amount}">
        <input type="submit" value="[submit]" class="submit-btn">
        </form>`;
    } else {
      itemTemplate =
        `<label>${this.props.property.name}</label>
        <label>${this.props.property.amount}</label>
        <div class="edit-btn">[edit]</div>
        <div class="destroy-btn">[destroy]</div>`;
    }
    return itemTemplate;
  }
}
