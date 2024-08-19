import React from "react";
import { FaSquareGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-purple-800 text-white p-2 w-full min-h-16">
      <span className="text-center text-3xl block">
        <span>
          “Where a trust becomes a monopoly, the state has an immediate right to
          interfere.”
        </span>{" "}
        - Theodore Roosevelt
      </span>
      <div className="grid place-items-center h-12 text-sm block">
        <a
          target="_blank"
          href="https://github.com/adisawant2005/Monopoly-Bank-WebApp-Local/"
        >
          <FaSquareGithub size={24} />
        </a>
      </div>
    </div>
  );
}
