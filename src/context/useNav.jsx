import React, { createContext, useState, useContext } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  return (
    <NavContext.Provider value={{ isNavVisible, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
