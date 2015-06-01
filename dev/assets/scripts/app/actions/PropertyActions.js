import AppDispatcher from '../../framework/AppDispatcher';

let PropertyActions = {
  create: (name, amount) => {
    AppDispatcher.dispatch('PROPERTY_CREATE', {
      name: name,
      amount: amount
    });
  },
  updateName: (id, name) => {
    AppDispatcher.dispatch('PROPERTY_UPDATE_NAME', {
      id: id,
      name: name
    });
  },
  updateAmount: (id, amount) => {
    AppDispatcher.dispatch('PROPERTY_UPDATE_AMOUNT', {
      id: id,
      amount: amount
    });
  },
  destroy: (id) => {
    AppDispatcher.dispatch('PROPERTY_DESTROY', {
      id: id
    });
  }
};
export default PropertyActions;
