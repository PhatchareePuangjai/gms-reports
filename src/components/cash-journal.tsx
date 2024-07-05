import { CashJournalViewModel } from "./cash-journal.vm";
import React from "react";
import { Observer } from "mobx-react";
import { PaymentRowCategory } from "./payment.row.vm";

export type PaymentTerm = {
  no: number;
  startDate: string;
  endDate: string;
};

type Props = {
  paymentTerms: PaymentTerm[];
  currPaymentTermNo: number;
};

export const CashJournal: React.FC<Props> = ({
  paymentTerms,
  currPaymentTermNo,
}) => {
  const viewModel = new CashJournalViewModel(paymentTerms, currPaymentTermNo);

  return (
    <div>
      <h1>สมุดรายวัน รับ - จ่าย</h1>

      <table>
        <thead>
          <tr>
            <th rowSpan={2}>วันที่</th>
            <th rowSpan={2}>เลขที่เอกสาร</th>
            <th rowSpan={2}>คำอธิบายรายการ</th>
            <th rowSpan={2}>รหัสงบประมาณ</th>
            <th rowSpan={2}>หมวดค่าใช้จ่าย</th>
            <th colSpan={3}>เงินฝากธนาคาร</th>
            <th colSpan={3}>เงินสดในมือ</th>
            <th rowSpan={2}>ลูกหนี้เงินยืมทดรองจ่าย</th>
            <th rowSpan={2}>เจ้าหนี้</th>
            <th rowSpan={2}>รายจ่าย</th>
            <th rowSpan={2}>รายได้เงินงวดจาก กสศ.</th>
            <th rowSpan={2}>ภาษีหัก ณ ที่จ่ายของเงินงวด</th>
            <th rowSpan={2}>รายได้ดอกเบี้ยจากธนาคาร</th>
            <th rowSpan={2}>รายได้อื่นๆ</th>
            <th rowSpan={2}>ผลต่าง</th>
            <th rowSpan={2}>หมายเหตุ</th>
          </tr>
          <tr>
            <th>ฝาก</th>
            <th>ถอน</th>
            <th>คงเหลือ</th>
            <th>ฝาก</th>
            <th>ถอน</th>
            <th>คงเหลือ</th>
          </tr>
        </thead>
        <tbody>
          <Observer>
            {() => (
              <>
                {viewModel.paymentTerms.map((paymentPeriod) => {
                  return (
                    <React.Fragment key={`period-${paymentPeriod.no}`}>
                      <tr>
                        <td colSpan={3}>
                          <div>
                            {`งวดที่ ${paymentPeriod.no} `}
                            <button onClick={() => paymentPeriod.addRow()}>
                              add row
                            </button>
                          </div>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="text"
                                value={paymentPeriod.budgetCode}
                                onChange={(e) =>
                                  paymentPeriod.setBudgetCode(
                                    e.currentTarget.value
                                  )
                                }
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <select
                                name={`period-payment-term-category`}
                                value={paymentPeriod.balanceForward?.category}
                              >
                                <option value=""></option>
                                <option value="ค่าใช้จ่ายสำหรับบริหารจัดการอื่น">
                                  ค่าใช้จ่ายสำหรับบริหารจัดการอื่น
                                </option>
                                <option value="ค่าใช้จ่ายในการปฏิบัติตามวัตถุประสงค์ของโครงการ">
                                  ค่าใช้จ่ายในการปฏิบัติตามวัตถุประสงค์ของโครงการ
                                </option>
                                <option value="ค่าอาหารค่าอาหารว่างและค่าเครื่องดื่ม ค่าเดินทาง">
                                  ค่าอาหารค่าอาหารว่างและค่าเครื่องดื่ม
                                  ค่าเดินทาง
                                </option>
                                <option value="เงินสนับสนุนโครงการ ค่าเช่าอุปกรณ์โสตทัศนูปกรณ์">
                                  เงินสนับสนุนโครงการ
                                  ค่าเช่าอุปกรณ์โสตทัศนูปกรณ์
                                </option>
                              </select>
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward?.bankDeposit ||
                                  ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward
                                    ?.bankWithdrawal || ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward?.bankBalance ||
                                  ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward?.cashReceipts ||
                                  ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward
                                    ?.cashDisbursements || ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward?.cashBalance ||
                                  ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward
                                    ?.advancePaymentReceivables || ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward?.creditor || ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward?.expenses || ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward
                                    ?.paymentTermReceipts || ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward
                                    ?.withholdingTax || ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward
                                    ?.bankInterestIncome || ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward?.otherIncome ||
                                  ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="number"
                                value={
                                  paymentPeriod.balanceForward?.difference || ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                        <td>
                          <Observer>
                            {() => (
                              <input
                                type="text"
                                value={
                                  paymentPeriod.balanceForward?.remark || ""
                                }
                                disabled
                              />
                            )}
                          </Observer>
                        </td>
                      </tr>

                      <Observer>
                        {() => (
                          <>
                            {paymentPeriod.rows.map((row, rowIndex) => {
                              return (
                                <tr key={`row-${rowIndex}`}>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="date"
                                          value={row.date}
                                          onChange={(e) =>
                                            row.setDate(e.currentTarget.value)
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="text"
                                          value={row.documentNo}
                                          onChange={(e) =>
                                            row.setDocumentNo(
                                              e.currentTarget.value
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="text"
                                          value={row.description}
                                          onChange={(e) =>
                                            row.setDescription(
                                              e.currentTarget.value
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="text"
                                          value={row.budgetCode}
                                          onChange={(e) =>
                                            row.setBudgetCode(
                                              e.currentTarget.value
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <select
                                          name={`period-payment-term-category`}
                                          value={row.category}
                                          onChange={(e) =>
                                            row.setCategory(
                                              e.currentTarget
                                                .value as PaymentRowCategory
                                            )
                                          }
                                        >
                                          <option value=""></option>
                                          <option value="ค่าใช้จ่ายสำหรับบริหารจัดการอื่น">
                                            ค่าใช้จ่ายสำหรับบริหารจัดการอื่น
                                          </option>
                                          <option value="ค่าใช้จ่ายในการปฏิบัติตามวัตถุประสงค์ของโครงการ">
                                            ค่าใช้จ่ายในการปฏิบัติตามวัตถุประสงค์ของโครงการ
                                          </option>
                                          <option value="ค่าอาหารค่าอาหารว่างและค่าเครื่องดื่ม ค่าเดินทาง">
                                            ค่าอาหารค่าอาหารว่างและค่าเครื่องดื่ม
                                            ค่าเดินทาง
                                          </option>
                                          <option value="เงินสนับสนุนโครงการ ค่าเช่าอุปกรณ์โสตทัศนูปกรณ์">
                                            เงินสนับสนุนโครงการ
                                            ค่าเช่าอุปกรณ์โสตทัศนูปกรณ์
                                          </option>
                                        </select>
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.bankDeposit || ""}
                                          onChange={(e) =>
                                            row.setBankDeposit(
                                              Number(e.currentTarget.value)
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.bankWithdrawal || ""}
                                          onChange={(e) =>
                                            row.setBankWithdrawal(
                                              Number(e.currentTarget.value)
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.bankBalance || ""}
                                          disabled
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.cashReceipts || ""}
                                          onChange={(e) =>
                                            row.setCashReceipts(
                                              Number(e.currentTarget.value)
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.cashDisbursements || ""}
                                          onChange={(e) =>
                                            row.setCashDisbursements(
                                              Number(e.currentTarget.value)
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.cashBalance || ""}
                                          onChange={(e) =>
                                            row.setCashBalance(
                                              Number(e.currentTarget.value)
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={
                                            row.advancePaymentReceivables || ""
                                          }
                                          onChange={(e) =>
                                            row.setAdvancePaymentReceivables(
                                              Number(e.currentTarget.value)
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.creditor || ""}
                                          onChange={(e) =>
                                            row.setCreditor(
                                              Number(e.currentTarget.value)
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.expenses || ""}
                                          onChange={(e) =>
                                            row.setExpenses(
                                              Number(e.currentTarget.value)
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.paymentTermReceipts || ""}
                                          onChange={(e) =>
                                            row.setPaymentTermReceipts(
                                              Number(e.currentTarget.value)
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.withholdingTax || ""}
                                          onChange={(e) =>
                                            row.setWithholdingTax(
                                              Number(e.currentTarget.value)
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.bankInterestIncome || ""}
                                          onChange={(e) =>
                                            row.setBankInterestIncome(
                                              Number(e.currentTarget.value)
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.otherIncome || ""}
                                          onChange={(e) =>
                                            row.setOtherIncome(
                                              Number(e.currentTarget.value)
                                            )
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="number"
                                          value={row.difference || ""}
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                  <td>
                                    <Observer>
                                      {() => (
                                        <input
                                          type="text"
                                          value={row.remark || ""}
                                          onChange={(e) =>
                                            row.setRemark(e.currentTarget.value)
                                          }
                                        />
                                      )}
                                    </Observer>
                                  </td>
                                </tr>
                              );
                            })}
                          </>
                        )}
                      </Observer>
                    </React.Fragment>
                  );
                })}
              </>
            )}
          </Observer>
        </tbody>
      </table>
    </div>
  );
};
