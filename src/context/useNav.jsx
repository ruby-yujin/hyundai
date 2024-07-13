import React, { createContext, useState, useContext, useEffect } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => {
    if (isMobile) {
      setIsNavVisible((prev) => !prev);
    }
  };

  return (
    <NavContext.Provider
      value={{
        isNavVisible: isMobile ? isNavVisible : true,
        toggleNav,
        isMobile
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
