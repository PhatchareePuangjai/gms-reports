import { makeObservable, observable } from "mobx";
import { PaymentTermViewModel } from "./payment-term.vm";
import { PaymentTerm } from "./cash-journal";

export class CashJournalViewModel {
  projectName: string = "";
  contractNo: string = "";
  projectCode: string = "";
  paymentTerms: PaymentTermViewModel[] = [];

  constructor(paymentTerms: PaymentTerm[], currPaymentTermNo: number) {
    makeObservable(this, {
      projectName: observable,
      contractNo: observable,
      projectCode: observable,
      paymentTerms: observable,
    });

    for (const paymentTerm of paymentTerms) {
      this.paymentTerms.push(
        new PaymentTermViewModel(
          paymentTerm.no,
          paymentTerm.startDate,
          paymentTerm.endDate
        )
      );
    }
  }
}
