import PropertyStore from '../stores/PropertyStore';
import PropertyItem from './PropertyItem';
import Component from '../../framework/Component';

export default class PropertyList extends Component {
  constructor(el) {
    super(el, {
      properties: PropertyStore.getAll()
    });
    PropertyStore.addChangeListener(() => this._onChange());
  }
  _onChange() {
    this.setState({
      properties: PropertyStore.getAll()
    });
    this.render();
  }
  render() {
    let property = {};
    this.el.innerHTML = '';
    for (let i = 0; i < this.state.properties.length; i++) {
      property = this.state.properties[i];
      this.el.appendChild(new PropertyItem(property).el);
    }
  }
}
