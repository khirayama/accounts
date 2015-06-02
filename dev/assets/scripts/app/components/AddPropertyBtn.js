import Component from '../../framework/Component';

export default class AddPropertyBtn extends Component {
  constructor(el) {
    super(el, {});
  }
  handleEvents() {
    this.on('click', () => {
      console.log('show Modal');
    });
  }
}

