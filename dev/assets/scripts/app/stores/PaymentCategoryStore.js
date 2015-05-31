import 'babel/polyfill';
import Store from '../../framework/Store';

class PaymentCategoryStore extends Store {
  constructor() {
    super();
    this._paymentCategories = this._load() || {};
  }
  _create(name) {
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._paymentCategories[id] = {
      id: id,
      name: name
    };
    this._save();
  }
  _update(id, updates) {
    this._paymentCategories[id] = Object.assign({}, this._paymentCategories[id], updates);
    this._save();
  }
  _destroy(id) {
    delete this._paymentCategories[id];
    this._save();
  }
  getAll() {
    return this._paymentCategories;
  }
  _save() {
    localStorage.setItem('_paymentCategories', JSON.stringify(this._paymentCategories));
  }
  _load() {
    return JSON.parse(localStorage.getItem('_paymentCategories'));
  }
}
export default new PaymentCategoryStore();
