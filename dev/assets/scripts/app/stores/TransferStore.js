import 'babel/polyfill';
import Store from '../../framework/Store';
import PropertyStore from './PropertyStore';

class TransferStore extends Store {
  constructor() {
    super();
    this.register({
      'TRANSFER_CREATE': (action) => {
        this._create(action.amount, action.date, action.from, action.to, action.memo);
      },
      'TRANSFER_DESTROY': (action) => {
        this._destroy(action.id);
      }
    });
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
    let transfers = [];
    let transfer = {};
    for (let id in this._transfers) {
      if (!{}.hasOwnProperty.call(this._transfers, id)) return false;
      transfer = this._transfers[id];
      transfers.push(Object.assign({}, transfer, {
        type: 'transfer',
        from_name: PropertyStore.getById(transfer.from).name,
        to_name: PropertyStore.getById(transfer.to).name
      }));
    }
    return transfers;
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
