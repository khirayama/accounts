import 'babel/polyfill';
import Store from '../../framework/Store';

class ReceiptCategoryStore extends Store {
  constructor() {
    super();
    this._receiptCategories = this._load() || {};

    if (!Object.keys(this._receiptCategories).length) this._initialize();
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
    let receiptCategories = [];
    for (let id in this._receiptCategories) {
      if (!{}.hasOwnProperty.call(this._receiptCategories, id)) return false;
      receiptCategories.push(this._receiptCategories[id]);
    }
    return receiptCategories;
  }
  _save() {
    localStorage.setItem('_receiptCategories', JSON.stringify(this._receiptCategories));
  }
  _load() {
    return JSON.parse(localStorage.getItem('_receiptCategories'));
  }
  _initialize() {
    this._create('給与');
    this._create('事業・副業');
    this._create('年金');
    this._create('その他入金');
  }
}
export default new ReceiptCategoryStore();
