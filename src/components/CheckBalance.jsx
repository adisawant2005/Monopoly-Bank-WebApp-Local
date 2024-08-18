import React from "react";

export default function CheckBalance({
  balanceCustomerName,
  setBalanceCustomerName,
  handleGetBalance,
  balance,
}) {
  return (
    <>
      {/* Check Balance */}
      <div className="bg-white flex flex-col p-6 rounded-lg shadow-md w-full">
        <h2 className="text-xl font-semibold mb-4">Get Balance</h2>
        <div className="w-full">
          <span className="font-medium">Player Name</span>
          <input
            type="text"
            value={balanceCustomerName}
            onChange={(e) => setBalanceCustomerName(e.target.value)}
            placeholder="Player Name"
            className="border border-gray-300 rounded-md w-full px-4 py-2 mb-4 text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={handleGetBalance}
          className="bg-green-500 text-white font-medium rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Get Balance
        </button>
        <p className="mt-4 text-green-700">{balance}</p>
      </div>
    </>
  );
}
