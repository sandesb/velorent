import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header spans full width */}
      <Header />
      {/* Sidebar and Main Content */}
      <div className="flex flex-1">
        <Sidebar className="w-64" />
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
      <Footer/>

    </div>
  );
};

export default Layout;
