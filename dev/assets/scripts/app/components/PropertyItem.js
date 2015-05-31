import Component from '../../framework/Component';

export default class PropertyItem extends Component {
  constructor(property) {
    super('template', {}, {
      property: property
    });
  }
  template() {
    let property = this.props.property;
    return (
      `<li>
        ${property.name} / ${property.amount} [編集]
      </li>`
    );
  }
}
