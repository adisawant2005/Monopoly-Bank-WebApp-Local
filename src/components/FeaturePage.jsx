import React from "react";
import {
  AddCustomers,
  CreditMoney,
  DebitMoney,
  TransferMoney,
  CheckBalance,
  ResetData,
  DefaultComponent,
} from "./index";

export default function FeaturePage({
  showFeature,
  // Add Customer
  addCustomerName,
  setAddCustomerName,
  initialBalance,
  setInitialBalance,
  handleAddCustomer,
  addCustomerMessage,
  // Credit Money
  creditCustomerName,
  setCreditCustomerName,
  creditAmount,
  setCreditAmount,
  handleCreditMoney,
  creditAllAmount,
  setCreditAllAmount,
  handleCreditMoneyAll,
  creditMessage,
  // Debit Money
  debitCustomerName,
  setDebitCustomerName,
  debitAmount,
  setDebitAmount,
  handleDebitMoney,
  debitAllAmount,
  setDebitAllAmount,
  handleDebitMoneyAll,
  debitMessage,
  // Transfer Money
  transferSender,
  setTransferSender,
  transferReceiver,
  setTransferReceiver,
  transferAmount,
  setTransferAmount,
  handleTransferMoney,
  transferMessage,
  // Check Balance
  balanceCustomerName,
  setBalanceCustomerName,
  handleGetBalance,
  balance,
  // Reset Data
  resetDataValue,
  setResetDataValue,
  resetData,
  resetDataMessage,
}) {
  switch (showFeature) {
    case "Add_Customer":
      return (
        <AddCustomers
          addCustomerName={addCustomerName}
          setAddCustomerName={setAddCustomerName}
          initialBalance={initialBalance}
          setInitialBalance={setInitialBalance}
          handleAddCustomer={handleAddCustomer}
          addCustomerMessage={addCustomerMessage}
        />
      );
    case "Credit_Money":
      return (
        <CreditMoney
          creditCustomerName={creditCustomerName}
          setCreditCustomerName={setCreditCustomerName}
          creditAmount={creditAmount}
          setCreditAmount={setCreditAmount}
          handleCreditMoney={handleCreditMoney}
          creditAllAmount={creditAllAmount}
          setCreditAllAmount={setCreditAllAmount}
          handleCreditMoneyAll={handleCreditMoneyAll}
          creditMessage={creditMessage}
        />
      );
    case "Debit_Money":
      return (
        <DebitMoney
          debitCustomerName={debitCustomerName}
          setDebitCustomerName={setDebitCustomerName}
          debitAmount={debitAmount}
          setDebitAmount={setDebitAmount}
          handleDebitMoney={handleDebitMoney}
          debitAllAmount={debitAllAmount}
          setDebitAllAmount={setDebitAllAmount}
          handleDebitMoneyAll={handleDebitMoneyAll}
          debitMessage={debitMessage}
        />
      );
    case "Transfer_Money":
      return (
        <TransferMoney
          transferSender={transferSender}
          setTransferSender={setTransferSender}
          transferReceiver={transferReceiver}
          setTransferReceiver={setTransferReceiver}
          transferAmount={transferAmount}
          setTransferAmount={setTransferAmount}
          handleTransferMoney={handleTransferMoney}
          transferMessage={transferMessage}
        />
      );
    case "Check_Balance":
      return (
        <CheckBalance
          balanceCustomerName={balanceCustomerName}
          setBalanceCustomerName={setBalanceCustomerName}
          handleGetBalance={handleGetBalance}
          balance={balance}
        />
      );
    case "Clear_Data":
      return (
        <ResetData
          resetDataValue={resetDataValue}
          setResetDataValue={setResetDataValue}
          handleResetData={resetData}
          resetDataMessage={resetDataMessage}
        />
      );
    default:
      return <DefaultComponent />;
  }
}
