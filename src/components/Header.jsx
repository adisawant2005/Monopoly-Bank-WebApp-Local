import React from "react";

export default function Header() {
  return (
    <div className="bg-red-700 w-full">
      <div className="flex flex-row justify-center ">
        <img className="h-[16vh] me-4" src="logo1.png" alt="Monopoly_Man" />
        <img
          className="h-[16vh] p-2"
          src="Monopoly_Logo.png"
          alt="Monopoly_Logo"
        />
        <img className="h-[16vh]" src="logo2.png" alt="Monopoly_Man" />
      </div>
    </div>
  );
}
