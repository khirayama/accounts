import 'babel/polyfill';
import Store from '../../framework/Store';

let HOLIDAY = {
  BEFORE: 'BEFORE',
  STAY: 'STAY',
  AFTER: 'AFTER'
};

class SettingStore extends Store {
  constructor() {
    super();
    this._settings = this._load() || {};
  }
  _create() {
    this._settings = {
      startDate: 1,
      holiday: HOLIDAY.BEFORE
    };
    this._save();
  }
  _update(id, updates) {
    this._settings = Object.assign({}, this._settings, updates);
    this._save();
  }
  getAll() {
    return this._settings;
  }
  getHolidayOptions() {
    return HOLIDAY;
  }
  _save() {
    localStorage.setItem('_settings', JSON.stringify(this._settings));
  }
  _load() {
    return JSON.parse(localStorage.getItem('_settings'));
  }
}
export default new SettingStore();
