import "./App.css";
import { CashJournal, PaymentTerm } from "./components/cash-journal";

function App() {
  const mockPaymentTerms: PaymentTerm[] = [
    { no: 1, startDate: "2021-01-01", endDate: "2021-01-31" },
  ];
  const mockCurrPaymentTermNo = 1;

  return (
    <div className="App">
      <CashJournal
        paymentTerms={mockPaymentTerms}
        currPaymentTermNo={mockCurrPaymentTermNo}
      />
    </div>
  );
}

export default App;
