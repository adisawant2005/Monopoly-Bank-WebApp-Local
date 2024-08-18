import React from "react";

export default function CreditMoney({
  creditCustomerName,
  setCreditCustomerName,
  creditAmount,
  setCreditAmount,
  handleCreditMoney,
  creditAllAmount,
  setCreditAllAmount,
  handleCreditMoneyAll,
  creditMessage,
}) {
  return (
    <>
      {/* Credit Money */}
      <div className="bg-white p-6 rounded-lg shadow-md flex-1 w-full">
        <h2 className="text-xl font-semibold mb-4">Credit Money</h2>
        <div className="w-full">
          <span className="font-medium">Player Name</span>
          <input
            type="text"
            value={creditCustomerName}
            onChange={(e) => setCreditCustomerName(e.target.value)}
            placeholder="Player Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="w-full">
          <span className="font-medium">Amount</span>
          <input
            type="number"
            value={creditAmount}
            onChange={(e) => setCreditAmount(e.target.value)}
            placeholder="Amount"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={handleCreditMoney}
          className="bg-green-500 text-white font-medium rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Credit Money
        </button>
        <div className="w-full mt-4 mb-4">
          <span className="font-medium">Credit To All</span>
          <input
            type="number"
            value={creditAllAmount}
            onChange={(e) => setCreditAllAmount(e.target.value)}
            placeholder="Credit Amount To All"
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={handleCreditMoneyAll}
          className="bg-green-500 text-white font-medium rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Credit All Customers
        </button>
        <p className="mt-4 text-green-700">{creditMessage}</p>
      </div>
    </>
  );
}
