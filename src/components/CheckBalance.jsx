import { useState } from "react";

export default function CheckBalance({
  allCustomers,
  handleGetBalance,
  balance,
}) {
  const [selectedPlayer, setSelectedPlayer] = useState("");

  const handleChange = (e) => {
    const playerName = e.target.value;
    setSelectedPlayer(playerName);
    handleGetBalance(playerName);
  };

  return (
    <div className="bg-white flex flex-col p-6 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">Get Balance</h2>

      {Object.entries(allCustomers).length === 0 ? (
        <span className="text-2xl font-semibold text-green-600">
          Add Players To Check Balances
        </span>
      ) : (
        <>
          <div className="mb-2">
            {/* <label htmlFor="player" className="text-xl"></label> */}
            <select
              id="player"
              name="player_name"
              value={selectedPlayer}
              onChange={handleChange}
              className={`${
                selectedPlayer !== ""
                  ? "bg-blue-200 border-blue-200 hover:border-blue-400"
                  : "bg-yellow-200 border-yellow-200 hover:border-yellow-400"
              } w-52 h-10 px-2 py-1 text-2xl border-2  rounded-xl outline-none`}
            >
              <option value="" disabled>
                --Select Player--
              </option>
              {Object.entries(allCustomers).map(([name, balance], index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          {balance !== "" ? (
            <span className="mt-4 text-3xl text-green-600 font-medium">
              {balance}
            </span>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}
