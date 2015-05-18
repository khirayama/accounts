import 'babel/polyfill';
import Store from '../../framework/Store';

/**
 * @classdesc 資産
 * @constructor
 */
class PropertyStore extends Store {
  constructor() {
    super();
  }

  /**
    資産を追加するmethod
    @param {string} name - 資産名
    @param {number} amount - 初期資産
  */
  _create(name, amount) {
    console.log(name, amount);
  }

  /**
    資産を追加するmethod
    @param {string} name - 資産名
  */
  _update() {
  }
  _destroy() {
  }
  _updateOrders() {
  }
  getAll() {
  }
}
export default new PropertyStore();
