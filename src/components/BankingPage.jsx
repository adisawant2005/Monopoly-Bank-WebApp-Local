import { useState, useEffect } from "react";
import Bank from "../modules/bankModule";
import { FeaturePage } from ".";

// Your updated Bank class here

const bank = new Bank();

export default function BankingPage() {
  // State for Add Customer
  const [addCustomerName, setAddCustomerName] = useState("");
  const [initialBalance, setInitialBalance] = useState("");
  const [addCustomerMessage, setAddCustomerMessage] = useState("");

  // State for Credit Money
  const [creditCustomerName, setCreditCustomerName] = useState("");
  const [creditAmount, setCreditAmount] = useState("");
  const [creditMessage, setCreditMessage] = useState("");
  const [creditAllAmount, setCreditAllAmount] = useState("");

  // State for Debit Money
  const [debitCustomerName, setDebitCustomerName] = useState("");
  const [debitAmount, setDebitAmount] = useState("");
  const [debitMessage, setDebitMessage] = useState("");
  const [debitAllAmount, setDebitAllAmount] = useState("");

  // State for Get Balance
  const [balanceCustomerName, setBalanceCustomerName] = useState("");
  const [balance, setBalance] = useState("");

  // State for Transfer Money
  const [transferSender, setTransferSender] = useState("");
  const [transferReceiver, setTransferReceiver] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [transferMessage, setTransferMessage] = useState("");

  // State for All Customers
  const [allCustomers, setAllCustomers] = useState({});

  // State for Clear Data
  const [resetDataValue, setResetDataValue] = useState("");
  const [resetDataMessage, setResetDataMessage] = useState("");

  // State to show the feature
  const [showFeature, setShowFeature] = useState("");

  // Handlers
  const handleAddCustomer = () => {
    const result = bank.addCustomer(
      addCustomerName,
      parseFloat(initialBalance)
    );
    setAddCustomerMessage(result);
    setAddCustomerName("");
    setInitialBalance("");
    updateAllCustomers();
  };

  const handleCreditMoney = () => {
    const result = bank.creditMoney(
      creditCustomerName,
      parseFloat(creditAmount)
    );
    setCreditMessage(result);
    setCreditCustomerName("");
    setCreditAmount("");
    updateAllCustomers();
  };

  const handleCreditMoneyAll = () => {
    const result = bank.creditMoneyAll(parseFloat(creditAllAmount));
    setCreditMessage(result);
    setCreditAllAmount("");
    updateAllCustomers();
  };

  const handleDebitMoney = () => {
    const result = bank.debitMoney(debitCustomerName, parseFloat(debitAmount));
    setDebitMessage(result);
    setDebitCustomerName("");
    setDebitAmount("");
    updateAllCustomers();
  };

  const handleDebitMoneyAll = () => {
    const result = bank.debitMoneyAll(parseFloat(debitAllAmount));
    setDebitMessage(result);
    setDebitAllAmount("");
    updateAllCustomers();
  };

  const handleGetBalance = () => {
    const result = bank.getBalance(balanceCustomerName);
    setBalance(result);
    setBalanceCustomerName("");
  };

  const handleTransferMoney = () => {
    const result = bank.transferMoney(
      transferSender,
      transferReceiver,
      parseFloat(transferAmount)
    );
    setTransferMessage(result);
    setTransferSender("");
    setTransferReceiver("");
    setTransferAmount("");
    updateAllCustomers();
  };

  const updateAllCustomers = () => {
    const result = bank.getAllCustomers();
    setAllCustomers(result);
    setResetDataMessage("");
  };

  const resetData = () => {
    if (resetDataValue === "reset") {
      bank.resetData();
      // console.log({
      //   data: localStorage.getItem("data"),
      //   customers: bank.getAllCustomers(),
      // });
      setAllCustomers({});
      setResetDataValue("");
      setResetDataMessage("Bank reset successfully.");
      setAddCustomerMessage("");
      setCreditMessage("");
      setDebitMessage("");
      setTransferMessage("");
    }
  };

  useEffect(() => {
    updateAllCustomers(); // Initial load to show any existing customers
  }, []);

  console.log(allCustomers.keys);

  return (
    <div className="p-8 max-w-full mx-auto bg-sky-100 text-gray-800 rounded-lg shadow-lg">
      <h1 className="text-5xl font-medium text-green-700 mb-6 text-center">
        Welcome to Monopoly Bank
      </h1>
      <div className="flex gap-6 mb-6">
        <div>
          <ul className="flex flex-col gap-4">
            <li>
              <button
                onClick={() => setShowFeature("Add_Customer")}
                className="bg-sky-500 text-center w-60 text-2xl font-medium text-white rounded-md px-6 py-2 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                Add Player
              </button>
            </li>
            <li>
              <button
                onClick={() => setShowFeature("Credit_Money")}
                className="bg-lime-500 text-center w-60 text-2xl font-medium text-white rounded-md px-6 py-2 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
              >
                Credit Money
              </button>
            </li>
            <li>
              <button
                onClick={() => setShowFeature("Debit_Money")}
                className="bg-yellow-500 text-center w-60 text-2xl font-medium text-white rounded-md px-6 py-2 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Debit Money
              </button>
            </li>
            <li>
              <button
                onClick={() => setShowFeature("Transfer_Money")}
                className="bg-blue-500 text-center w-60 text-2xl font-medium text-white rounded-md px-6 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Transfer Money
              </button>
            </li>
            <li>
              <button
                onClick={() => setShowFeature("Check_Balance")}
                className="bg-green-500 text-center w-60 text-2xl font-medium text-white rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Check Balance
              </button>
            </li>
            <li>
              <button
                onClick={() => setShowFeature("Clear_Data")}
                className="bg-red-500 text-center w-60 text-2xl font-medium text-white rounded-md px-6 py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Reset Bank
              </button>
            </li>
          </ul>
        </div>
        <div className="w-3/5">
          <FeaturePage
            showFeature={showFeature}
            // Add Customer
            addCustomerName={addCustomerName}
            setAddCustomerName={setAddCustomerName}
            initialBalance={initialBalance}
            setInitialBalance={setInitialBalance}
            handleAddCustomer={handleAddCustomer}
            addCustomerMessage={addCustomerMessage}
            // Credit Money
            creditCustomerName={creditCustomerName}
            setCreditCustomerName={setCreditCustomerName}
            creditAmount={creditAmount}
            setCreditAmount={setCreditAmount}
            handleCreditMoney={handleCreditMoney}
            creditAllAmount={creditAllAmount}
            setCreditAllAmount={setCreditAllAmount}
            handleCreditMoneyAll={handleCreditMoneyAll}
            creditMessage={creditMessage}
            // Debit Money
            debitCustomerName={debitCustomerName}
            setDebitCustomerName={setDebitCustomerName}
            debitAmount={debitAmount}
            setDebitAmount={setDebitAmount}
            handleDebitMoney={handleDebitMoney}
            debitAllAmount={debitAllAmount}
            setDebitAllAmount={setDebitAllAmount}
            handleDebitMoneyAll={handleDebitMoneyAll}
            debitMessage={debitMessage}
            // Transfer Money
            transferSender={transferSender}
            setTransferSender={setTransferSender}
            transferReceiver={transferReceiver}
            setTransferReceiver={setTransferReceiver}
            transferAmount={transferAmount}
            setTransferAmount={setTransferAmount}
            handleTransferMoney={handleTransferMoney}
            transferMessage={transferMessage}
            // Check Balance
            balanceCustomerName={balanceCustomerName}
            setBalanceCustomerName={setBalanceCustomerName}
            handleGetBalance={handleGetBalance}
            balance={balance}
            // Reset Data
            resetDataValue={resetDataValue}
            setResetDataValue={setResetDataValue}
            resetData={resetData}
            resetDataMessage={resetDataMessage}
          />
        </div>
        {/* All Customers Balance */}
        <div className="bg-white flex flex-col p-6 rounded-lg shadow-md min-w-[300px]">
          <h2 className="text-xl font-semibold mb-4">
            All Customers & Balance
          </h2>
          <div className="text-2xl text-green-600 font-medium">
            <ul>
              {Object.entries(allCustomers).length === 0
                ? "No customers added."
                : Object.entries(allCustomers).map(([name, balance], index) => (
                    <li key={name} className="block mb-1">
                      <span className="w-1/3">
                        {index + 1}&nbsp;{name}
                      </span>
                      <span className="w-2/3">: {balance}</span>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
