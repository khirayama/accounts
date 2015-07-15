import React from 'react';
import PropertyStore from '../stores/PropertyStore';
import ReceiptStore from '../stores/ReceiptStore';
import PaymentStore from '../stores/PaymentStore';
import TransferStore from '../stores/TransferStore';
import ReceiptCategoryStore from '../stores/ReceiptCategoryStore';
import PaymentCategoryStore from '../stores/PaymentCategoryStore';
import PropertySection from './PropertySection';
import InputSection from './InputSection';
import HistorySection from './HistorySection';
import BudgetSection from './BudgetSection';

export default class AccountApp extends React.Component {
  constructor() {
    super();
    this.state = {
      properties: PropertyStore.getAll(),
      receipts: ReceiptStore.getAll(),
      payments: PaymentStore.getAll(),
      transfers: TransferStore.getAll(),
      receiptCategories: ReceiptCategoryStore.getAll(),
      paymentCategories: PaymentCategoryStore.getAll()
    };
  }
  componentDidMount() {
    PropertyStore.addChangeListener(this._onChange.bind(this));
    ReceiptStore.addChangeListener(this._onChange.bind(this));
    PaymentStore.addChangeListener(this._onChange.bind(this));
    TransferStore.addChangeListener(this._onChange.bind(this));
  }
  // TODO: componentWillUnmount書く
  render() {
    return (
      <div>
        <section>
          <section>
            <PropertySection properties={this.state.properties} />
            <InputSection
              properties={this.state.properties}
              receiptCategories={this.state.receiptCategories}
              paymentCategories={this.state.paymentCategories} />
            <HistorySection
              payments={this.state.payments}
              receipts={this.state.receipts}
              transfers={this.state.transfers}
              receiptCategories={this.state.receiptCategories}
              paymentCategories={this.state.paymentCategories} />
            <BudgetSection
              payments={this.state.payments}
              paymentCategories={this.state.paymentCategories} />
          </section>
        </section>
      </div>
    );
    // return (
    //   <div>
    //     <section>
    //       <Header />
    //       <section>
    //         <BudgetSection />
    //       </section>
    //     </section>
    //     <section>
    //       <GeneralSettingSection />
    //       <CategorySettingSection />
    //       <BudgetSettingSection />
    //     </section>
    //   </div>
    // );
  }
  _onChange() {
    // TODO: これくらいの規模なら大雑把にいいよね
    this.setState({
      properties: PropertyStore.getAll(),
      receipts: ReceiptStore.getAll(),
      payments: PaymentStore.getAll(),
      transfers: TransferStore.getAll(),
      receiptCategories: ReceiptCategoryStore.getAll(),
      paymentCategories: PaymentCategoryStore.getAll()
    });
  }
}
