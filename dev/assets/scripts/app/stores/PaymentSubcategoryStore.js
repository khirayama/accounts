import 'babel/polyfill';
import Store from '../../framework/Store';

class PaymentSubcategoryStore extends Store {
  constructor() {
    super();
    this._paymentSubcategories = this._load() || {};
  }
  _create(name, category) {
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._paymentSubcategories[id] = {
      id: id,
      name: name,
      category: category
    };
    this._save();
  }
  _update(id, updates) {
    this._paymentSubcategories[id] = Object.assign({}, this._paymentSubcategories[id], updates);
    this._save();
  }
  _destroy(id) {
    delete this._paymentSubcategories[id];
    this._save();
  }
  getAll() {
    return this._paymentSubcategories;
  }
  _save() {
    localStorage.setItem('_paymentSubcategories', JSON.stringify(this._paymentSubcategories));
  }
  _load() {
    return JSON.parse(localStorage.getItem('_paymentSubcategories'));
  }
}
export default new PaymentSubcategoryStore();
