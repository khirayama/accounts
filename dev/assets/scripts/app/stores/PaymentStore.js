import 'babel/polyfill';
import Store from '../../framework/Store';

class PaymentStore extends Store {
  constructor() {
    super();
    this._payments = this._load() || {};
  }
  _create(amount, date, subcategory, memo) {
    // date -> '2015/05/30'
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._payments[id] = {
      id: id,
      amount: amount,
      data: date,
      subcategory: subcategory,
      memo: memo
    };
    this._save();
  }
  _update(id, updates) {
    this._payments[id] = Object.assign({}, this._payments[id], updates);
    this._save();
  }
  _destroy(id) {
    delete this._payments[id];
    this._save();
  }
  getAll() {
    return this._payments;
  }
  getByMonth(year, month) {
    // ReceiptStore.getByMonth(2015, 5); -> 2015年の五月分
    // TODO: 良い方法ありそうだけど
    let searchedPayments = {};
    for (let id in this._payments) {
      if (!{}.hasOwnProperty.call(this._todos, id)) return false;
      let payment = this._payments[id];
      let paymentDate = new Date(payment.date);
      if (paymentDate.getYear() === year && paymentDate.getMonth() === month - 1) {
        searchedPayments[id] = payment;
      }
    }
    return searchedPayments;
  }
  _save() {
    localStorage.setItem('_payments', JSON.stringify(this._payments));
  }
  _load() {
    return JSON.parse(localStorage.getItem('_payments'));
  }
}
export default new PaymentStore();
