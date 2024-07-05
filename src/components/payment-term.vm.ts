import { action, makeObservable, observable } from "mobx";
import { PaymentRowCategory, PaymentRowViewModel } from "./payment.row.vm";

type BalanceForward = {
  category?: PaymentRowCategory;

  bankDeposit?: number;
  bankWithdrawal?: number;
  bankBalance?: number;

  cashReceipts?: number;
  cashDisbursements?: number;
  cashBalance?: number;

  advancePaymentReceivables?: number;
  creditor?: number;
  expenses?: number;

  paymentTermReceipts?: number;
  withholdingTax?: number;
  bankInterestIncome?: number;
  otherIncome?: number;
  difference?: number;
  remark?: string;
};

export class PaymentTermViewModel {
  no: number = 0;
  startDate: string = "";
  endDate: string = "";
  rows: PaymentRowViewModel[] = [];
  budgetCode?: string;
  balanceForward?: BalanceForward;

  constructor(no: number, startDate: string, endDate: string) {
    makeObservable(this, {
      rows: observable,
      budgetCode: observable,
      balanceForward: observable,

      addRow: action,
      setBudgetCode: action,
    });
    this.no = no;
    this.startDate = startDate;
    this.endDate = endDate;

    for (let i = 0; i < 500; i++) {
      this.addRow();
    }
  }

  setBudgetCode(budgetCode: string) {
    this.budgetCode = budgetCode;
  }

  addRow() {
    const previousRow = this.rows.at(-1) || null;

    this.rows.push(new PaymentRowViewModel(previousRow));
  }
}
