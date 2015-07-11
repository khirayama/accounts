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
          </section>
          <HistorySection
            payments={this.state.payments}
            receipts={this.state.receipts}
            transfers={this.state.transfers}
            receiptCategories={this.state.receiptCategories}
            paymentCategories={this.state.paymentCategories} />
        </section>
      </div>
    );
    // return (
    //   <div>
    //     <section>
    //       <Header />
    //       <section>
    //         <PropertySection properties={this.state.properties} />
    //         <BudgetSection />
    //         <InputSection />
    //         <HistorySection />
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
    this.setState({
      properties: PropertyStore.getAll()
    });
  }
}
