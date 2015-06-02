import Component from '../../framework/Component';
import PropertyActions from '../actions/PropertyActions';

export default class PropertyModal extends Component {
  constructor(el) {
    super(el, {});
  }
  handleEvents() {
    this.on('click', '.property-submit-btn', (event) => {
      event.preventDefault();
      let name = this.el.querySelector('[name="name"]').value;
      let amount = this.el.querySelector('[name="amount"]').value;
      PropertyActions.create(name, amount);
    });
  }
}

