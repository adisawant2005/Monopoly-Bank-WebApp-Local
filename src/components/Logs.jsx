import React from "react";

export default function Logs({ messages }) {
  return (
    <>
      {/* Logs */}
      <div className="bg-white flex flex-col p-6 rounded-lg shadow-md w-full">
        <h2 className="text-xl font-semibold mb-4">Bank Logs</h2>

        <ul className="w-full max-h-64 overflow-y-auto">
          {messages.map((m, i) => (
            <li
              className="mb-1 px-2 py-1 border-2 border-green-300 rounded-md"
              key={i}
            >
              {m}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
