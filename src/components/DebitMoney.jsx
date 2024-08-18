import React from "react";

export default function DebitMoney({
  debitCustomerName,
  setDebitCustomerName,
  debitAmount,
  setDebitAmount,
  handleDebitMoney,
  debitAllAmount,
  setDebitAllAmount,
  handleDebitMoneyAll,
  debitMessage,
}) {
  return (
    <>
      {/* Debit Money */}
      <div className="bg-white p-6 rounded-lg shadow-md flex-1 w-full">
        <h2 className="text-xl font-semibold mb-4">Debit Money</h2>
        <div className="w-full">
          <span className="font-medium">Player Name</span>
          <input
            type="text"
            value={debitCustomerName}
            onChange={(e) => setDebitCustomerName(e.target.value)}
            placeholder="Player Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="w-full">
          <span className="font-medium">Amount</span>
          <input
            type="number"
            value={debitAmount}
            onChange={(e) => setDebitAmount(e.target.value)}
            placeholder="Amount"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={handleDebitMoney}
          className="bg-green-500 text-white font-medium rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Debit Money
        </button>
        <div className="w-full mt-4 mb-4">
          <span className="font-medium">Debit from All</span>
          <input
            type="number"
            value={debitAllAmount}
            onChange={(e) => setDebitAllAmount(e.target.value)}
            placeholder="Debit Amount From All"
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={handleDebitMoneyAll}
          className="bg-green-500 text-white font-medium rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Debit All Customers
        </button>
        <p className="mt-4 text-green-700">{debitMessage}</p>
      </div>
    </>
  );
}
