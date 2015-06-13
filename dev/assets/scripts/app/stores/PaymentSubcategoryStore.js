import 'babel/polyfill';
import Store from '../../framework/Store';
import PaymentCategoryStore from './PaymentCategoryStore';

class PaymentSubcategoryStore extends Store {
  constructor() {
    super();
    this._paymentSubcategories = this._load() || {};

    if (!Object.keys(this._paymentSubcategories).length) this._initialize();
  }
  _create(name, categoryId) {
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._paymentSubcategories[id] = {
      id: id,
      name: name,
      categoryId: categoryId
    };
    this._save();
  }
  _update(id, updates) {
    this._paymentSubcategories[id] = Object.assign({}, this._paymentSubcategories[id], updates);
    this._save();
  }
  _destroy(id) {
    delete this._paymentSubcategories[id];
    this._save();
  }
  getAll() {
    return this._paymentSubcategories;
  }
  _save() {
    localStorage.setItem('_paymentSubcategories', JSON.stringify(this._paymentSubcategories));
  }
  _load() {
    return JSON.parse(localStorage.getItem('_paymentSubcategories'));
  }
  _initialize() {
    let paymentCategory;
    let _paymentCategories = PaymentCategoryStore.getAll();
    for (let key in _paymentCategories) {
      paymentCategory = _paymentCategories[key];
      switch (paymentCategory) {
        case '食費':
          this._create('食料費', key);
          this._create('外食費',  key);
          this._create('その他食費', key);
          break;
        case '日用品':
          this._create('日用品', key);
          this._create('その他日用品', key);
          break;
        case '交通費':
          this._create('', key);
          this._create('', key);
          break;
        case '趣味・娯楽':
          this._create('', key);
          this._create('', key);
          break;
        case '衣服・美容':
          this._create('', key);
          this._create('', key);
          break;
        case '交際費':
          this._create('', key);
          this._create('', key);
          break;
        case '健康・医療':
          this._create('', key);
          this._create('', key);
          break;
        case '特別な支出':
          this._create('', key);
          this._create('', key);
          break;
        case '住宅':
          this._create('', key);
          this._create('', key);
          break;
        case '光熱費':
          this._create('', key);
          this._create('', key);
          break;
        case '通信費':
          this._create('', key);
          this._create('', key);
          break;
        default:
          break;

      }
    }
  }
}
export default new PaymentSubcategoryStore();
