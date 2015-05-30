# Design

2015.05.25 Mon.

## Store
Property(id, name, amount)
Receipt(id, amount, date, subcategory, memo)
Payment(id, amount, date, subcategory, memo)
Transfer(id, amount, from, to, memo)
ReceiptCategory(id, name)
ReceiptSubcategory(id, name, category)
PaymentCategory(id, name, budget, budgetType)
PaymentSubcategory(id, name, category)
SettingDate(id, date, holiday)



## AppDispatcher
Singleton

## Action
Property
  create
  updateName
  updateOrder
  destroy

Receipt
  create
  updateAmount
  updateDate
  updateCategory
  updateMemo
  destroy

Payment
  create
  updateAmount
  updateDate
  updateCategory
  updateMemo
  destroy

Transfer
  create
  updateAmount
  updateFrom
  updateTo
  updateMemo
  destroy

ReceiptCategory
  create
  updateName
  destroy

ReceiptSubCategory
  create
  updateName
  destroy

PaymentCategory
  create
  updateName
  updateBudget
  updateBudgetType
  destroy

PaymentSubCategory
  create
  updateName
  destroy

SettingDate
  create
  updateDate
  updateHoliday



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
