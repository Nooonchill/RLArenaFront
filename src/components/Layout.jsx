import React, { useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen w-screen bg-white">
      <div
        className={`absolute inset-0 bg-white transition-all duration-300 z-10 pointer-events-none ${
          isMenuOpen ? "backdrop-blur-s bg-opacity-30" : "bg-opacity-0"}`}
      ></div>
      <Sidebar />
      <div className={`ml-[24px] transition-all duration-300 bg-white z-30 ${isMenuOpen ? "pl-20" : "pl-20"} `}>
        <div className="pt-4 pr-2">
          <Header />
          <main className="mt-4 pb-8">
            {children}
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}; 

export default Layout;
