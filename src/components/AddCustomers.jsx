import React from "react";

export default function AddCustomers({
  addCustomerName,
  setAddCustomerName,
  initialBalance,
  setInitialBalance,
  handleAddCustomer,
  addCustomerMessage,
}) {
  return (
    <>
      {/* Add Customer */}
      <div className="bg-white p-6 rounded-lg shadow-md flex-1 w-full">
        <h2 className="text-xl font-semibold mb-4">Add Player</h2>
        <div className="w-full">
          <span className="font-medium">Player Name</span>
          <input
            type="text"
            value={addCustomerName}
            onChange={(e) => setAddCustomerName(e.target.value)}
            placeholder="Player Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-xl text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="w-full">
          <span className="font-medium">Initial Balance</span>
          <input
            type="number"
            value={initialBalance}
            onChange={(e) => setInitialBalance(e.target.value)}
            placeholder="Initial Balance"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-xl text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={handleAddCustomer}
          className="bg-green-500 text-white font-medium rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Player
        </button>
        <p className="mt-4 text-xl text-green-600 font-medium">
          {addCustomerMessage}
        </p>
      </div>
    </>
  );
}
