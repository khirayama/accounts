import 'babel/polyfill';
import Store from '../../framework/Store';

class PropertyStore extends Store {
  constructor() {
    super();
    this._properties = this._load() || {};
    this.register({
      'PROPERTY_CREATE': (action) => {
        if (action.name && action.amount) this._create(action.name, action.amount);
      }
    });
  }
  _create(name, amount) {
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._properties[id] = {
      id: id,
      name: name,
      amount: amount
    };
    this._save();
  }
  _update(id, updates) {
    this._properties[id] = Object.assign({}, this._properties[id], updates);
    this._save();
  }
  _destroy(id) {
    delete this._properties[id];
    this._save();
  }
  getAll() {
    let properties = [];
    for (let id in this._properties) {
      if (!{}.hasOwnProperty.call(this._properties, id)) return false;
      properties.push(this._properties[id]);
    }
    return properties;
  }
  _save() {
    localStorage.setItem('_properties', JSON.stringify(this._properties));
  }
  _load() {
    return JSON.parse(localStorage.getItem('_properties'));
  }
}
export default new PropertyStore();
