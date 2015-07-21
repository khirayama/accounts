import AppDispatcher from '../../framework/AppDispatcher';
import PropertyStore from '../stores/PropertyStore';

// FIXME: 支出、収入、振替を総じたいいAction名。もっと分けるべきか
let ReceiptActionCreators = {
  create: (receipt) => {
    let property = PropertyStore.getById(receipt.property);
    // receiptなので、資産を増やしてcreate
    AppDispatcher.dispatch('RECEIPT_CREATE', {
      amount: receipt.amount,
      date: receipt.date,
      category: receipt.category,
      property: receipt.property,
      memo: receipt.memo
    });
    AppDispatcher.dispatch('PROPERTY_UPDATE', {
      id: receipt.property,
      name: property.name,
      amount: +property.amount + +receipt.amount
    });
  },
  destroy: (receipt) => {
    let property = PropertyStore.getById(receipt.property);
    AppDispatcher.dispatch('RECEIPT_DESTROY', {id: receipt.id});
    AppDispatcher.dispatch('PROPERTY_UPDATE', {
      id: receipt.property,
      name: property.name,
      amount: +property.amount - +receipt.amount
    });
  }
};
export default ReceiptActionCreators;


