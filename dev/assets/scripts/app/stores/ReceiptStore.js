import 'babel/polyfill';
import Store from '../../framework/Store';

class ReceiptStore extends Store {
  constructor() {
    super();
    this.register({
      'RECEIPT_CREATE': (action) => {
        if (action.amount && action.date && action.category) this._create(action.amount, action.date, action.category, action.memo);
      }
    });
    this._receipts = this._load() || {};
  }
  _create(amount, date, category, subcategory, memo) {
    // date -> '2015/05/30'
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._receipts[id] = {
      id: id,
      amount: amount,
      date: date,
      category: category,
      subcategory: subcategory,
      memo: memo
    };
    this._save();
  }
  _update(id, updates) {
    this._receipts[id] = Object.assign({}, this._receipts[id], updates);
    this._save();
  }
  _destroy(id) {
    delete this._receipts[id];
    this._save();
  }
  getAll() {
    let receipts = [];
    for (let id in this._receipts) {
      if (!{}.hasOwnProperty.call(this._receipts, id)) return false;
      receipts.push(this._receipts[id]);
    }
    return receipts;
  }
  getByMonth(year, month) {
    // ReceiptStore.getByMonth(2015, 5); -> 2015年の五月分
    // TODO: 良い方法ありそうだけど
    let searchedReceipts = {};
    for (let id in this._receipts) {
      if (!{}.hasOwnProperty.call(this._todos, id)) return false;
      let receipt = this._receipts[id];
      let receiptDate = new Date(receipt.date);
      if (receiptDate.getYear() === year && receiptDate.getMonth() === month - 1) {
        searchedReceipts[id] = receipt;
      }
    }
    return searchedReceipts;
  }
  _save() {
    localStorage.setItem('_receipts', JSON.stringify(this._receipts));
  }
  _load() {
    return JSON.parse(localStorage.getItem('_receipts'));
  }
}
export default new ReceiptStore();
