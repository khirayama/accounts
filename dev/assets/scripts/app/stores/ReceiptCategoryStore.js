import 'babel/polyfill';
import Store from '../../framework/Store';

class ReceiptCategoryStore extends Store {
  constructor() {
    super();
    this._receiptCategories = this._load() || {};
  }
  _create(name) {
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._receiptCategories[id] = {
      id: id,
      name: name
    };
    this._save();
  }
  _update(id, updates) {
    this._receiptCategories[id] = Object.assign({}, this._receiptCategories[id], updates);
    this._save();
  }
  _destroy(id) {
    delete this._receiptCategories[id];
    this._save();
  }
  getAll() {
    return this._receiptCategories;
  }
  _save() {
    localStorage.setItem('_receiptCategories', JSON.stringify(this._receiptCategories));
  }
  _load() {
    return JSON.parse(localStorage.getItem('_receiptCategories'));
  }
}
export default new ReceiptCategoryStore();
