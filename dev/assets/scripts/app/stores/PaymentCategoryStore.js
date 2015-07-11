import 'babel/polyfill';
import Store from '../../framework/Store';

let BUDGET_TYPE = {
  DAILY: 'DAILY', // 日割で計算したいもの（食費等）
  IRREGULARLY: 'IRREGULARLY', // 不定期変動費。月によって出たりでなかったりするもの（娯楽、旅行、冠婚葬祭等）
  REGULARLY: 'REGULARLY' // 定期。毎月支払いがあり、一定の金額が見込まれるもの（家賃、電気代、携帯料金等）
};

class PaymentCategoryStore extends Store {
  constructor() {
    super();
    this._paymentCategories = this._load() || {};

    if (!Object.keys(this._paymentCategories).length) this._initialize();
  }
  _create(name, budgetType, budget) {
    // budget: 予算額
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._paymentCategories[id] = {
      id: id,
      name: name,
      budgetType: budgetType || BUDGET_TYPE.DAILY,
      budget: budget || 0
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
    let paymentCategories = [];
    for (let id in this._paymentCategories) {
      if (!{}.hasOwnProperty.call(this._paymentCategories, id)) return false;
      paymentCategories.push(this._paymentCategories[id]);
    }
    return paymentCategories;
  }
  getById(id) {
    return this._paymentCategories[id];
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
  _initialize() {
    this._create('食費', BUDGET_TYPE.DAILY, 30000)
    this._create('日用品', BUDGET_TYPE.DAILY, 5000);

    this._create('交通費', BUDGET_TYPE.IRREGULARLY, 3000);
    this._create('趣味・娯楽', BUDGET_TYPE.IRREGULARLY, 20000);
    this._create('衣服・美容', BUDGET_TYPE.IRREGULARLY, 15000);
    this._create('交際費', BUDGET_TYPE.IRREGULARLY, 20000);
    this._create('健康・医療', BUDGET_TYPE.IRREGULARLY, 3000);
    this._create('特別な支出', BUDGET_TYPE.IRREGULARLY, 0);

    this._create('住宅', BUDGET_TYPE.REGULARLY, 109000);
    this._create('光熱費', BUDGET_TYPE.REGULARLY, 20000);
    this._create('通信費', BUDGET_TYPE.REGULARLY, 5000);
  }
}
export default new PaymentCategoryStore();
