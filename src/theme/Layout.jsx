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
        <Sidebar className="w-64 rounded-2xl" />
        <main className="flex-1 p-6 bg-gray-50 rounded-2xl">
          <Outlet />
        </main>
      </div>
      <Footer className="rounded-2xl" />

    </div>
  );
};

export default Layout;
