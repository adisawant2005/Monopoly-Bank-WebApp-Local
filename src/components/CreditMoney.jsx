import React from "react";

export default function CreditMoney({
  allCustomers,
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

        {Object.entries(allCustomers).length === 0 ? (
          <span className="text-2xl font-semibold text-green-600">
            Add Players To Credit Money
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
                  value={creditCustomerName}
                  onChange={(e) => setCreditCustomerName(e.target.value)}
                  className={`${
                    creditCustomerName !== ""
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
                value={creditAmount}
                onChange={(e) => setCreditAmount(e.target.value)}
                placeholder="Amount"
                className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-xl text-gray-800 focus:ring-2 focus:ring-green-500"
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
                className="border border-gray-300 rounded-md px-4 py-2 w-full text-xl text-gray-800 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              onClick={handleCreditMoneyAll}
              className="bg-green-500 text-white font-medium rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Credit All Customers
            </button>
            <p className="mt-4 text-xl text-green-600 font-medium">
              {creditMessage}
            </p>
          </>
        )}
      </div>
    </>
  );
}
