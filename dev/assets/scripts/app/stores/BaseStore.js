import 'babel/polyfill';
import Store from '../../framework/Store';

class HogeStore extends Store {
  constructor() {
    super();
    this._hoges = {};
  }
  _create(name, param1) {
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    let order = Object.keys(this._hoges).length;
    this._hoges[id] = {
      id: id,
      param1: param1,
      order: order
    };
  }
  _update(id, updates) {
    this._properties[id] = Object.assign({}, this._properties[id], updates);
  }
  _destroy(id) {
    delete this._hoges[id];
  }
  _updateOrders() {
  }
  getAll() {
    let hoges = [];
    for (let key in this._hoges) {
      if (!{}.hasOwnProperty.call(this._hoges, key)) return false;
      let hoge = this._hoges[key];
      hoges.push(hoge);
    }
    hoges.sort((a, b) => {
      let x = a.order;
      let y = b.order;
      return (x > y) ? 1 : -1;
    });
    return hoges;
  }
}
export default new HogeStore();
