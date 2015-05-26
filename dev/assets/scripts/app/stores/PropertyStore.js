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
    資産を更新するmethod
    @param {string} id - 資産id
    @param {object} updates - 資産Object
  */
  _update(id, updates) {
    this._properties[id] = Object.assign({}, this._properties[id], updates);
  }

  /**
    資産を削除するmethod
    @param {string} id - 資産id
  */
  _destroy(id) {
    delete this._properties[id];
  }

  /**
    資産の表示順を変更するmethod
    @param {number} from  - 移動する資産
    @param {number} to - 移動先
  */
 // FIXME: fromをidに変更した方がいい？
  _updateOrders(from, to) {
    for (let id in this._properties) {
      if (!{}.hasOwnProperty.call(this._properties, id)) return false;
      let property = this._properties[id];
      if (from > to) {
        if (property.order >= to && property.order < from) {
          this._update(id, {order: this._properties[id].order + 1});
        } else if (property.order === from) {
          this._update(id, {order: to});
        }
      } else if (to > from) {
        if (property.order > from && property.order <= to) {
          this._update(id, {order: this._properties[id].order - 1});
        } else if (property.order === from) {
          this._update(id, {order: to});
        }
      }
    }
  }
  /**
    資産一覧を取得するmethod
  */
  getAll() {
    let properties = [];
    for (let key in this._properties) {
      if (!{}.hasOwnProperty.call(this._todos, key)) return false;
      let property = this._properties[key];
      properties.push(property);
    }
    properties.sort((a, b) => {
      let x = a.order;
      let y = b.order;
      return (x > y) ? 1 : -1;
    });
    return properties;
  }
}
export default new PropertyStore();
