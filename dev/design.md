# Store
Property(id, name, amount)
Receipt(id, amount, date, subcategory, memo)
Payment(id, amount, date, subcategory, memo)
Transfer(id, amount, date, from, to, memo)
ReceiptCategory(id, name)
ReceiptSubcategory(id, name, category)
PaymentCategory(id, name, budget, budgetType)
PaymentSubcategory(id, name, category)
SettingDate(id, date, holiday)

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
