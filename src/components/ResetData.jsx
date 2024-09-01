import React from "react";

export default function ResetData({
  resetDataValue,
  setResetDataValue,
  handleResetData,
  resetDataMessage,
}) {
  return (
    <>
      {/* Clear data */}
      <div className="bg-white flex flex-col p-6 rounded-lg shadow-md w-full">
        <h2 className="text-xl font-semibold mb-4">
          Enter <span className="italic">'reset'</span> to reset the bank
        </h2>
        <div className="w-full">
          <span className="font-medium">Player Name</span>
          <input
            type="text"
            value={resetDataValue}
            onChange={(e) => setResetDataValue(e.target.value)}
            placeholder="Player Name"
            className="border border-gray-300 rounded-md w-full text-xl px-4 py-2 mb-4 text-gray-800 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={handleResetData}
          className="bg-green-500 text-white font-medium rounded-md px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Reset Bank
        </button>
        <p className="mt-4 text-green-700">{resetDataMessage}</p>
      </div>
    </>
  );
}
