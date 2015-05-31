import 'babel/polyfill';
import Store from '../../framework/Store';

class ReceiptSubcategoryStore extends Store {
  constructor() {
    super();
    this._receiptSubcategories = this._load() || {};
  }
  _create(name, category) {
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._receiptSubcategories[id] = {
      id: id,
      name: name,
      category: category
    };
    this._save();
  }
  _update(id, updates) {
    this._receiptSubcategories[id] = Object.assign({}, this._receiptSubcategories[id], updates);
    this._save();
  }
  _destroy(id) {
    delete this._receiptSubcategories[id];
    this._save();
  }
  getAll() {
    return this._receiptSubcategories;
  }
  _save() {
    localStorage.setItem('_receiptSubcategories', JSON.stringify(this._receiptSubcategories));
  }
  _load() {
    return JSON.parse(localStorage.getItem('_receiptSubcategories'));
  }
}
export default new ReceiptSubcategoryStore();
