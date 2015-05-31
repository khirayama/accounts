# Store
- [x] Property(id, name, amount)
- [x] Receipt(id, amount, date, subcategory, memo)
- [x] Payment(id, amount, date, subcategory, memo)
- [x] Transfer(id, amount, date, from, to, memo)
- [x] ReceiptCategory(id, name)
- [x] ReceiptSubcategory(id, name, category)
- [x] PaymentCategory(id, name, budget, budgetType)
- [x] PaymentSubcategory(id, name, category)
- [ ] SettingDate(id, date, holiday)

# AppDispatcher
Singleton

# Action

# View
App
  Home
    Properties
    Budgets
    ItemInput
      ReceiptInput
      PaymentInput
      TransferInput
  History
    ItemsList
  BudgetsManager
    BudgetsList
  Settings
