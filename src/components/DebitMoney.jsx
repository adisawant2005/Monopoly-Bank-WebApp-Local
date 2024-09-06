import React from "react";

export default function DebitMoney({
  allCustomers,
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

        {Object.entries(allCustomers).length === 0 ? (
          <span className="text-2xl font-semibold text-green-600">
            Add Players To Debit Money
          </span>
        ) : (
          <>
            <div className="w-full">
              <span className="font-medium">Player Name</span>

              <div className="mb-2">
                {/* <label htmlFor="player" className="text-xl"></label> */}
                <select
                  id="player"
                  name="player_name"
                  value={debitCustomerName}
                  onChange={(e) => setDebitCustomerName(e.target.value)}
                  className={`${
                    debitCustomerName !== ""
                      ? "bg-blue-200 border-blue-200 hover:border-blue-400"
                      : "bg-yellow-200 border-yellow-200 hover:border-yellow-400"
                  } font-semibold w-60 h-10 px-2 py-1 text-2xl border-2  rounded-xl outline-none`}
                >
                  <option value="" disabled>
                    --Select Player--
                  </option>
                  {Object.entries(allCustomers).map(
                    ([name, balance], index) => (
                      <option
                        key={index}
                        value={name}
                        className="font-semibold"
                      >
                        {name}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div className="w-full">
              <span className="font-medium">Amount</span>
              <input
                type="number"
                value={debitAmount}
                onChange={(e) => setDebitAmount(e.target.value)}
                placeholder="Amount"
                className={`${
                  debitAmount > allCustomers[debitCustomerName]
                    ? "bg-red-400"
                    : ""
                } border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-xl text-gray-800 focus:ring-2 focus:ring-green-500`}
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
                className=" border border-gray-300 rounded-md px-4 py-2 w-full text-xl text-gray-800 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              onClick={handleDebitMoneyAll}
              className="bg-green-500 text-white font-medium rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Debit All Customers
            </button>
            <p className="mt-4 text-xl text-green-600 font-medium">
              {debitMessage}
            </p>
          </>
        )}
      </div>
    </>
  );
}
