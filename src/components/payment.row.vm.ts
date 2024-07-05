import { action, computed, makeObservable, observable } from "mobx";

export type PaymentRowCategory =
  | "ค่าใช้จ่ายสำหรับบริหารจัดการอื่น"
  | "ค่าใช้จ่ายในการปฏิบัติตามวัตถุประสงค์ของโครงการ"
  | "ค่าอาหารค่าอาหารว่างและค่าเครื่องดื่ม"
  | "ค่าเดินทาง"
  | "เงินสนับสนุนโครงการ"
  | "ค่าเช่าอุปกรณ์โสตทัศนูปกรณ์";

export class PaymentRowViewModel {
  date: string = "";
  documentNo: string = "";
  description: string = "";
  budgetCode: string = "";
  category?: PaymentRowCategory = undefined;

  bankDeposit?: number = undefined;
  bankWithdrawal?: number = undefined;
  bankRemaining?: number = undefined;

  cashReceipts?: number = undefined;
  cashDisbursements?: number = undefined;
  cashRemaining?: number = undefined;

  advancePaymentReceivables?: number = undefined;
  creditor?: number = undefined;
  expenses?: number = undefined;

  paymentTermReceipts?: number = undefined;
  withholdingTax?: number = undefined;
  bankInterestIncome?: number = undefined;
  otherIncome?: number = undefined;
  remark?: string = "";

  constructor() {
    makeObservable(this, {
      date: observable,
      documentNo: observable,
      description: observable,
      budgetCode: observable,
      category: observable,
      bankDeposit: observable,
      bankWithdrawal: observable,
      bankRemaining: observable,
      cashReceipts: observable,
      cashDisbursements: observable,
      cashRemaining: observable,
      advancePaymentReceivables: observable,
      creditor: observable,
      expenses: observable,
      paymentTermReceipts: observable,
      withholdingTax: observable,
      bankInterestIncome: observable,
      otherIncome: observable,
      remark: observable,

      setDate: action,
      setDocumentNo: action,
      setDescription: action,

      difference: computed,
    });
  }

  setDate(date: string) {
    this.date = date;
  }

  setDocumentNo(documentNo: string) {
    this.documentNo = documentNo;
  }

  setDescription(description: string) {
    this.description = description;
  }
  setBudgetCode(budgetCode: string) {
    this.budgetCode = budgetCode;
  }

  setCategory(category: PaymentRowCategory) {
    this.category = category;
  }

  setBankDeposit(bankDeposit: number) {
    this.bankDeposit = bankDeposit;
  }

  setBankWithdrawal(bankWithdrawal: number) {
    this.bankWithdrawal = bankWithdrawal;
  }

  setBankRemaining(bankRemaining: number) {
    this.bankRemaining = bankRemaining;
  }

  setCashReceipts(cashReceipts: number) {
    this.cashReceipts = cashReceipts;
  }

  setCashDisbursements(cashDisbursements: number) {
    this.cashDisbursements = cashDisbursements;
  }

  setCashRemaining(cashRemaining: number) {
    this.cashRemaining = cashRemaining;
  }

  setAdvancePaymentReceivables(advancePaymentReceivables: number) {
    this.advancePaymentReceivables = advancePaymentReceivables;
  }

  setCreditor(creditor: number) {
    this.creditor = creditor;
  }

  setExpenses(expenses: number) {
    this.expenses = expenses;
  }

  setPaymentTermReceipts(paymentTermReceipts: number) {
    this.paymentTermReceipts = paymentTermReceipts;
  }

  setWithholdingTax(withholdingTax: number) {
    this.withholdingTax = withholdingTax;
  }

  setBankInterestIncome(bankInterestIncome: number) {
    this.bankInterestIncome = bankInterestIncome;
  }

  setOtherIncome(otherIncome: number) {
    this.otherIncome = otherIncome;
  }

  setRemark(remark: string) {
    this.remark = remark;
  }

  get difference() {
    return this.bankDeposit! - this.bankWithdrawal!;
  }
}
