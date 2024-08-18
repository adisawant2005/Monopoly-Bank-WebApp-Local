import React from "react";

export default function ShowAllCustomersBalance() {
  return (
    <>
      {/* All Customers Balance */}
      <div className="bg-white flex flex-col p-6 rounded-lg shadow-md min-w-[225px]">
        <h2 className="text-xl font-semibold mb-4">All Customers</h2>
        <div className="text-2xl text-green-600 font-medium">
          <ul>
            {allCustomers.split(",").map((customer, index) => (
              <li key={index} className="block mb-1">
                {customer}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
