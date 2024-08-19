import React from "react";

export default function ShowAllCustomersBalance({ allCustomers }) {
  return (
    <div className="w-full h-full bg-white flex flex-col p-6 rounded-lg shadow-md">
      {Object.entries(allCustomers).length === 0 ? (
        <span className="text-2xl w-full text-green-600 font-semibold mb-4">
          No Players Added
        </span>
      ) : (
        <h2 className="flex w-full flex-row text-2xl text-green-600 font-semibold mb-4">
          <span className="min-w-1/3">&nbsp;Player&nbsp;</span>
          <span className="max-w-2/3">: Balance</span>
        </h2>
      )}

      <div className="text-2xl w-full text-stone-700 font-medium">
        <ul className="w-full">
          {Object.entries(allCustomers).length === 0
            ? "Add Players To See Balances"
            : Object.entries(allCustomers).map(([name, balance], index) => (
                <li key={name} className="flex flex-row block w-full mb-1">
                  <span className="min-w-1/3">
                    {index + 1}&nbsp;&nbsp;{name}&nbsp;
                  </span>
                  <span className="max-w-2/3">: {balance}</span>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}
