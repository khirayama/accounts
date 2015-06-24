# Store
- [x] Property(id, name, amount)
- [x] Receipt(id, amount, date, category, memo)
- [x] Payment(id, amount, date, category, memo)
- [x] Transfer(id, amount, date, from, to, memo)
- [x] ReceiptCategory(id, name)
- [x] PaymentCategory(id, name, budget, budgetType)
- [x] SettingDate(id, date, holiday)

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
