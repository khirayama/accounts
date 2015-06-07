import Component from '../../framework/Component';
import PropertyActions from '../actions/PropertyActions';

export default class PropertyModal extends Component {
  constructor(el) {
    super(el, {});
  }
  handleEvents() {
    this.on('click', '.property-submit-btn', (event) => {
      event.preventDefault();
      let nameInput = this.el.querySelector('input[name="name"]');
      let amountInput = this.el.querySelector('input[name="amount"]');
      let name = nameInput.value;
      let amount = amountInput.value;
      PropertyActions.create(name, amount);
      nameInput.value = '';
      amountInput.value = '';
    });
  }
}

