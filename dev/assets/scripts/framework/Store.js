import 'babel/polyfill';
import EventDispatcher from './EventDispatcher';
import AppDispatcher from './AppDispatcher';

const CHANGE_EVENT = 'CHANGE';

export default class Store extends EventDispatcher {
  constructor() {
    super();
  }
  dispatchChange() {
    this.dispatch(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  register(actions) {
    for (let key in actions) {
      if (!{}.hasOwnProperty.call(actions, key)) return false;
      let action = actions[key];
      // TODO: これ、どうすれば...
      // FIXME: forの中でfunctionを作りたくない
      AppDispatcher.on(key, (data) => {
        action(data);
        this.dispatchChange();
      });
    }
  }
}

