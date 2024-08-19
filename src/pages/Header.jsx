import React, { useState, useEffect } from "react";

const Header = () => {
  const [headerStyle, setHeaderStyle] = useState({
    height: "100px",
    transition: "height 0.3s, padding 0.3s",
  });

  const handleScroll = () => {
    const scrollTop = window.scrollY; // Get current scroll position
    if (scrollTop < 50) {
      setHeaderStyle({
        height: `${210 - scrollTop}px`,
        marginTop: `${scrollTop}px`,
        transition: "height 0.3s, padding 0.3s",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="bg-red-500 w-full"
      style={headerStyle}
      onScroll={handleScroll}
    >
      <div className="flex flex-row justify-center h-full">
        <img className="me-4" src="logo1.png" alt="Monopoly_Man" />
        <img className="p-2" src="Monopoly_Logo.png" alt="Monopoly_Logo" />
        <img className="" src="logo2.png" alt="Monopoly_Man" />
      </div>
    </header>
  );
};

export default Header;
