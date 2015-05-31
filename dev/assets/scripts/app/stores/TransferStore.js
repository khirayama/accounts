import 'babel/polyfill';
import Store from '../../framework/Store';

class TransferStore extends Store {
  constructor() {
    super();
    this._transfers = this._load() || {};
  }
  _create(amount, date, from, to, memo) {
    // date -> '2015/05/30'
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._transfers[id] = {
      id: id,
      amount: amount,
      date: date,
      from: from,
      to: to,
      memo: memo
    };
    this._save();
  }
  _update(id, updates) {
    this._transfers[id] = Object.assign({}, this._transfers[id], updates);
    this._save();
  }
  _destroy(id) {
    delete this._transfers[id];
    this._save();
  }
  getAll() {
    return this._transfers;
  }
  getByMonth(year, month) {
    // ReceiptStore.getByMonth(2015, 5); -> 2015年の五月分
    // TODO: 良い方法ありそうだけど
    let searchedTransfers = {};
    for (let id in this._transfers) {
      if (!{}.hasOwnProperty.call(this._todos, id)) return false;
      let transfer = this._transfers[id];
      let transferData = new Date(transfer.date);
      if (transferData.getYear() === year && transferData.getMonth() === month - 1) {
        searchedTransfers[id] = transfer;
      }
    }
    return searchedTransfers;
  }
  _save() {
    localStorage.setItem('_transfers', JSON.stringify(this._transfers));
  }
  _load() {
    return JSON.parse(localStorage.getItem('_transfers'));
  }
}
export default new TransferStore();
