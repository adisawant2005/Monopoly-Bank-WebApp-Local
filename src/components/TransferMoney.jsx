import React from "react";

export default function TransferMoney({
  allCustomers,
  transferSender,
  setTransferSender,
  transferReceiver,
  setTransferReceiver,
  transferAmount,
  setTransferAmount,
  handleTransferMoney,
  transferMessage,
}) {
  return (
    <>
      {/* Transfer Money */}
      <div className="bg-white p-6 rounded-lg shadow-md flex-1 w-full">
        <h2 className="text-xl font-semibold mb-4">Transfer Money</h2>
        {Object.entries(allCustomers).length < 2 ? (
          <span className="text-2xl font-semibold text-green-600">
            Add Minimum 2 Players To Perform Transaction
          </span>
        ) : (
          <>
            <div className="w-full">
              <span className="font-medium">Sender Player</span>

              <div className="mb-2">
                {/* <label htmlFor="player" className="text-xl"></label> */}
                <select
                  id="player"
                  name="player_name"
                  value={transferSender}
                  onChange={(e) => setTransferSender(e.target.value)}
                  className={`${
                    transferSender !== ""
                      ? "bg-blue-200 border-blue-200 hover:border-blue-400"
                      : "bg-yellow-200 border-yellow-200 hover:border-yellow-400"
                  } w-52 h-10 px-2 py-1 text-2xl border-2  rounded-xl outline-none`}
                >
                  <option value="" disabled>
                    --Select Player--
                  </option>
                  {Object.entries(allCustomers).map(
                    ([name, balance], index) => (
                      <option key={index} value={name}>
                        {name}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div className="w-full">
              <span className="font-medium">Receiver Player</span>

              <div className="mb-2">
                {/* <label htmlFor="player" className="text-xl"></label> */}
                <select
                  id="player"
                  name="player_name"
                  value={transferReceiver}
                  onChange={(e) => setTransferReceiver(e.target.value)}
                  className={`${
                    transferReceiver !== ""
                      ? "bg-blue-200 border-blue-200 hover:border-blue-400"
                      : "bg-yellow-200 border-yellow-200 hover:border-yellow-400"
                  } w-52 h-10 px-2 py-1 text-2xl border-2  rounded-xl outline-none`}
                >
                  <option value="" disabled>
                    --Select Player--
                  </option>
                  {Object.entries(allCustomers).map(
                    ([name, balance], index) => (
                      <option key={index} value={name}>
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
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                placeholder="Amount"
                className={`${
                  transferAmount > allCustomers[transferSender]
                    ? "bg-red-400"
                    : ""
                } border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500`}
              />
            </div>
            <button
              onClick={handleTransferMoney}
              className="bg-green-500 text-white font-medium rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Transfer Money
            </button>
            <p className="mt-4 text-green-700">{transferMessage}</p>
          </>
        )}
      </div>
    </>
  );
}
