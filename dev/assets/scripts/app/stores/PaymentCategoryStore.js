import 'babel/polyfill';
import Store from '../../framework/Store';

let BUDGET_TYPE = {
  DAILY: 'DAILY', // 日割（食費等）
  REGULARLY: 'REGULARLY', // 定期（家賃、電気代、携帯料金等）
  IRREGULARLY: 'IRREGULARLY' // 不定期変動（娯楽、旅行、冠婚葬祭等）
};

class PaymentCategoryStore extends Store {
  constructor() {
    super();
    this._paymentCategories = this._load() || {};
  }
  _create(name, budget, budgetType) {
    // budget: 予算額
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._paymentCategories[id] = {
      id: id,
      name: name,
      budget: budget || 0,
      budgetType: budgetType || BUDGET_TYPE.DAILY
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
  getBudgetType() {
    return BUDGET_TYPE;
  }
  _save() {
    localStorage.setItem('_paymentCategories', JSON.stringify(this._paymentCategories));
  }
  _load() {
    return JSON.parse(localStorage.getItem('_paymentCategories'));
  }
}
export default new PaymentCategoryStore();
