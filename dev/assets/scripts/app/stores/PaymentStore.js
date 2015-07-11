import 'babel/polyfill';
import Store from '../../framework/Store';
import PaymentCategoryStore from './PaymentCategoryStore';
import PropertyStore from './PropertyStore';

class PaymentStore extends Store {
  constructor() {
    super();
    this.register({
      'PAYMENT_CREATE': (action) => {
        if (action.amount && action.date && action.category) this._create(action.amount, action.date, action.category, action.property, action.memo);
      }
    });
    this._payments = this._load() || {};
  }
  _create(amount, date, category, property, memo) {
    // date -> '2015/05/30'
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._payments[id] = {
      id: id,
      amount: amount,
      date: date,
      category: category,
      property: property,
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
  getById(id) {
    return this._payments[id];
  }
  getAll() {
    let payments = [];
    let payment = {};
    for (let id in this._payments) {
      if (!{}.hasOwnProperty.call(this._payments, id)) return false;
      payment = this._payments[id];
      payments.push(Object.assign({}, payment, {
        type: 'payment',
        category_name: PaymentCategoryStore.getById(payment.category).name,
        property_name: PropertyStore.getById(payment.property).name,
      }));
    }
    return payments;
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
