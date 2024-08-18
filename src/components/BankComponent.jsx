import React, { useState, useEffect } from "react";
import Bank from "../modules/bankModule";

// Your updated Bank class here

const bank = new Bank();

export default function BankComponent() {
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
  const [allCustomers, setAllCustomers] = useState("");

  // State for Clear Data
  const [clearDataValue, setClearDataValue] = useState("");
  const [clearDataMessage, setClearDataMessage] = useState("");

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
    setClearDataMessage("");
  };

  const clearData = () => {
    if (clearDataValue === "reset") {
      localStorage.clear();
      setAllCustomers("");
      setClearDataValue("");
      setClearDataMessage("Bank reset successfully.");
      setAddCustomerMessage("");
      setCreditMessage("");
      setDebitMessage("");
      setTransferMessage("");
      setAllCustomers("No customers found.");
    }
  };

  useEffect(() => {
    updateAllCustomers(); // Initial load to show any existing customers
    // console.log({ data: localStorage.getItem("data") });
  }, []);

  return (
    <div className="p-8 max-w-full mx-auto bg-sky-100 text-gray-800 rounded-lg shadow-lg">
      <h1 className="text-5xl font-medium text-green-700 mb-6 text-center">
        Welcome to Monopoly Bank
      </h1>
      <div className="flex flex-wrap gap-6 mb-6">
        {/* Add Customer */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-1 min-w-[225px]">
          <h2 className="text-xl font-semibold mb-4">Add Customer</h2>
          <input
            type="text"
            value={addCustomerName}
            onChange={(e) => setAddCustomerName(e.target.value)}
            placeholder="Customer Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            value={initialBalance}
            onChange={(e) => setInitialBalance(e.target.value)}
            placeholder="Initial Balance"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleAddCustomer}
            className="bg-green-500 text-white rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add Customer
          </button>
          <p className="mt-4 text-green-700">{addCustomerMessage}</p>
        </div>

        {/* Transfer Money */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-1 min-w-[225px]">
          <h2 className="text-xl font-semibold mb-4">Transfer Money</h2>
          <input
            type="text"
            value={transferSender}
            onChange={(e) => setTransferSender(e.target.value)}
            placeholder="Sender Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            value={transferReceiver}
            onChange={(e) => setTransferReceiver(e.target.value)}
            placeholder="Receiver Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            placeholder="Amount"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleTransferMoney}
            className="bg-green-500 text-white rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Transfer Money
          </button>
          <p className="mt-4 text-green-700">{transferMessage}</p>
        </div>

        {/* Credit Money */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-1 min-w-[225px]">
          <h2 className="text-xl font-semibold mb-4">Credit Money</h2>
          <input
            type="text"
            value={creditCustomerName}
            onChange={(e) => setCreditCustomerName(e.target.value)}
            placeholder="Customer Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            value={creditAmount}
            onChange={(e) => setCreditAmount(e.target.value)}
            placeholder="Amount"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleCreditMoney}
            className="bg-green-500 text-white rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Credit Money
          </button>
          <input
            type="number"
            value={creditAllAmount}
            onChange={(e) => setCreditAllAmount(e.target.value)}
            placeholder="Credit All Amount"
            className="border border-gray-300 rounded-md px-4 py-2 mt-4 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleCreditMoneyAll}
            className="bg-green-500 text-white rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Credit All Customers
          </button>
          <p className="mt-4 text-green-700">{creditMessage}</p>
        </div>

        {/* Debit Money */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-1 min-w-[225px]">
          <h2 className="text-xl font-semibold mb-4">Debit Money</h2>
          <input
            type="text"
            value={debitCustomerName}
            onChange={(e) => setDebitCustomerName(e.target.value)}
            placeholder="Customer Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            value={debitAmount}
            onChange={(e) => setDebitAmount(e.target.value)}
            placeholder="Amount"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleDebitMoney}
            className="bg-green-500 text-white rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Debit Money
          </button>
          <input
            type="number"
            value={debitAllAmount}
            onChange={(e) => setDebitAllAmount(e.target.value)}
            placeholder="Debit All Amount"
            className="border border-gray-300 rounded-md px-4 py-2 mt-4 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleDebitMoneyAll}
            className="bg-green-500 text-white rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Debit All Customers
          </button>
          <p className="mt-4 text-green-700">{debitMessage}</p>
        </div>

        {/* All Customers Balance */}
        <div className="bg-white flex flex-col p-6 rounded-lg shadow-md min-w-[225px]">
          <h2 className="text-xl font-semibold mb-4">All Customers</h2>
          <div className="text-2xl text-green-600 font-medium">
            <ul>
              {allCustomers.split(",").map((customer, index) => (
                <li key={index} className="block mb-1">
                  {customer}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Check Balance */}
        <div className="bg-white flex flex-col p-6 rounded-lg shadow-md min-w-[225px]">
          <h2 className="text-xl font-semibold mb-4">Get Balance</h2>
          <input
            type="text"
            value={balanceCustomerName}
            onChange={(e) => setBalanceCustomerName(e.target.value)}
            placeholder="Customer Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleGetBalance}
            className="bg-green-500 text-white rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Get Balance
          </button>
          <p className="mt-4 text-green-700">{balance}</p>
        </div>

        {/* Clear data */}
        <div className="bg-white flex flex-col p-6 rounded-lg shadow-md min-w-[225px]">
          <h2 className="text-xl font-semibold mb-4">
            Enter <span className="italic">'reset'</span> to reset the bank
          </h2>
          <input
            type="text"
            value={clearDataValue}
            onChange={(e) => setClearDataValue(e.target.value)}
            placeholder="Customer Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 text-gray-800 focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={clearData}
            className="bg-green-500 text-white rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Reset Bank
          </button>
          <p className="mt-4 text-green-700">{clearDataMessage}</p>
        </div>
      </div>
    </div>
  );
}
