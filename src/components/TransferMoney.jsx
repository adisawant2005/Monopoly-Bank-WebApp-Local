import React from "react";

export default function TransferMoney({
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
        <div className="w-full">
          <span className="font-medium">Sender Player</span>
          <input
            type="text"
            value={transferSender}
            onChange={(e) => setTransferSender(e.target.value)}
            placeholder="Sender Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="w-full">
          <span className="font-medium">Receiver Player</span>
          <input
            type="text"
            value={transferReceiver}
            onChange={(e) => setTransferReceiver(e.target.value)}
            placeholder="Receiver Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="w-full">
          <span className="font-medium">Amount</span>
          <input
            type="number"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            placeholder="Amount"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={handleTransferMoney}
          className="bg-green-500 text-white font-medium rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Transfer Money
        </button>
        <p className="mt-4 text-green-700">{transferMessage}</p>
      </div>
    </>
  );
}
