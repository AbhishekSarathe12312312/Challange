import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../Components/Home";
import Product from "../Components/Products";
import User from "../Components/Users";

const AppRouter = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      <div className="w-64 p-5 flex flex-col border-r border-gray-800">
        <h1 className="text-2xl font-semibold mb-6">Ecom</h1>

        <div className="bg-gray-800 p-3 rounded mb-6 text-sm">
          Logged in as
          <p className="font-medium">gg@gmail.com</p>
        </div>

        <nav className="space-y-3 flex-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-gray-800" : "hover:bg-gray-800"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-gray-800" : "hover:bg-gray-800"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/user"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-gray-800" : "hover:bg-gray-800"
              }`
            }
          >
            Users
          </NavLink>
        </nav>

        <button className="bg-white text-black py-2 rounded font-medium">
          Logout
        </button>
      </div>

      <div className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
