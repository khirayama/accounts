import 'babel/polyfill';
import Store from '../../framework/Store';

/**
 * @classdesc 資産
 * @constructor
 */
class PropertyStore extends Store {
  constructor() {
    super();
    this._properties = {};
  }

  /**
    資産を追加するmethod
    @param {string} name - 資産名
    @param {number} amount - 初期資産
  */
  _create(name, amount) {
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    let order = Object.keys(this._properties).length;
    this._properties[id] = {
      id: id,
      name: name,
      amount: amount,
      order: order
    };
  }

  /**
    資産を追加するmethod
    @param {string} id - 資産id
    @param {object} updates - 資産Object
  */
  _update(id, updates) {
    this._properties[id] = Object.assign({}, this._properties[id], updates);
  }
  _destroy() {
    delete this._properties;
  }
  _updateOrders(from, to) {
    for (let id in this._properties) {
      if (!{}.hasOwnProperty.call(this._properties, id)) return false;
      let property = this._properties[id];
      if (from > to) {
        if (property.order >= to && property.order < from) {
          property.order += 1;
        } else if (property.order === from) {
          property.order = to;
        }
      } else if (to > from) {
        if (property.order > from && property.order <= to) {
          property.order -= 1;
        } else if (property.order === from) {
          property.order = to;
        }
      }
    }
  }
  getAll() {
  }
}
export default new PropertyStore();
