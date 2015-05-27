import 'babel/polyfill';
import Store from '../../framework/Store';

/**
 * @classdesc 資産
 * @constructor
 */
class PropertyStore extends Store {
  constructor() {
    super();
    this._properties = this.loadData() || {};
  }

  /**
    資産を追加するmethod
    @param {string} name - 資産名
    @param {number} amount - 初期資産
  */
  _create(name, amount) {
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._properties[id] = {
      id: id,
      name: name,
      amount: amount
    };
    this.saveData();
  }

  /**
    資産を更新するmethod
    @param {string} id - 資産id
    @param {object} updates - 資産Object
  */
  _update(id, updates) {
    this._properties[id] = Object.assign({}, this._properties[id], updates);
    this.saveData();
  }

  /**
    資産を削除するmethod
    @param {string} id - 資産id
  */
  _destroy(id) {
    delete this._properties[id];
    this.saveData();
  }

  /**
    資産一覧を取得するmethod
  */
  getAll() {
    return this._properties;
  }
  /**
    資産を保存するmethod
    TODO: indexedDBに書き換えたいが、ちょっと知見足りないorz
  */
  saveData() {
    localStorage.setItem('_properties', JSON.stringify(this._properties));
  }
  /**
    資産を読み込むするmethod
    TODO: indexedDBに書き換えたいが、ちょっと知見足りないorz
  */
  loadData() {
    return JSON.parse(localStorage.getItem('_properties'));
  }
}
export default new PropertyStore();
