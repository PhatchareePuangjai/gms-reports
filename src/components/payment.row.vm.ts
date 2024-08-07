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

  bankDeposit: number | null = null;
  bankWithdrawal: number | null = null;

  cashReceipts: number | null = null;
  cashDisbursements: number | null = null;

  advancePaymentReceivables: number | null = null;
  creditor: number | null = null;
  expenses: number | null = null;

  paymentTermReceipts: number | null = null;
  withholdingTax: number | null = null;
  bankInterestIncome: number | null = null;
  otherIncome: number | null = null;
  remark?: string = "";

  constructor(readonly previousRow: PaymentRowViewModel | null) {
    makeObservable(this, {
      date: observable,
      documentNo: observable,
      description: observable,
      budgetCode: observable,
      category: observable,
      bankDeposit: observable,
      bankWithdrawal: observable,
      cashReceipts: observable,
      cashDisbursements: observable,
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
      setBudgetCode: action,
      setCategory: action,
      setBankDeposit: action,
      setBankWithdrawal: action,
      setCashReceipts: action,
      setCashDisbursements: action,
      setAdvancePaymentReceivables: action,
      setCreditor: action,
      setExpenses: action,
      setPaymentTermReceipts: action,
      setWithholdingTax: action,
      setBankInterestIncome: action,
      setOtherIncome: action,
      setRemark: action,

      bankBalance: computed,
      cashBalance: computed,
      difference: computed,
    });

    this.date = "2021-01-01";
    this.documentNo = "0001";
    this.description = "Description";
    this.budgetCode = "0001";
    this.category = "ค่าใช้จ่ายสำหรับบริหารจัดการอื่น";
    this.bankDeposit = 5000;
    this.bankWithdrawal = 100;
    this.cashReceipts = 500;
    this.cashDisbursements = 100;
    this.advancePaymentReceivables = 0;
    this.creditor = 0;
    this.expenses = 0;
    this.paymentTermReceipts = 0;
    this.withholdingTax = 0;
    this.bankInterestIncome = 0;
    this.otherIncome = 0;
    this.remark = "Remark";
  }

  get bankBalance(): number {
    return (
      Number(this.previousRow?.bankBalance || null) +
      Number(this.bankDeposit) -
      Number(this.bankWithdrawal)
    );
  }

  get cashBalance(): number {
    return (
      Number(this.previousRow?.cashBalance || null) +
      Number(this.cashReceipts) -
      Number(this.cashDisbursements)
    );
  }

  get difference(): number {
    return 0;
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

  setCashReceipts(cashReceipts: number) {
    this.cashReceipts = cashReceipts;
  }

  setCashDisbursements(cashDisbursements: number) {
    this.cashDisbursements = cashDisbursements;
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
}
