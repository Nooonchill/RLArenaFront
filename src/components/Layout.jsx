import React, { useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen w-screen bg-white dark:bg-blackturquoise">
      <Sidebar />
      <div className={`ml-[24px] transition-all duration-300 bg-white dark:bg-blackturquoise z-30 ${isMenuOpen ? "pl-20" : "pl-20"} `}>
        <div className="pt-4 pr-2">
          <Header />
          <main className="mt-4\ pb-8">
            {children}
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}; 

export default Layout;
