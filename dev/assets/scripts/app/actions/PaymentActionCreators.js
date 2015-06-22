import AppDispatcher from '../../framework/AppDispatcher';
import PropertyStore from '../stores/PropertyStore';

// FIXME: 支出、収入、振替を総じたいいAction名。もっと分けるべきか
let PaymentActionCreators = {
  create: (payment) => {
    console.log(payment);
    let property = PropertyStore.getById(payment.property);
    // TODO: paymentなので、資産を減らしてcreate
    AppDispatcher.dispatch('PAYMENT_CREATE', {
      amount: payment.amount,
      date: payment.date,
      category: payment.category,
      memo: payment.memo
    });
    AppDispatcher.dispatch('PROPERTY_UPDATE', {
      id: payment.property,
      name: property.name,
      amount: +property.amount - +payment.amount
    });
  }
};
export default PaymentActionCreators;


