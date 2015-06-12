import React from 'react';
import PropertyStore from '../stores/PropertyStore';
import PropertySection from './PropertySection';
import InputSection from './InputSection';

export default class AccountApp extends React.Component {
  constructor() {
    super();
    this.state = {
      properties: PropertyStore.getAll()
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
            <InputSection />
          </section>
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
