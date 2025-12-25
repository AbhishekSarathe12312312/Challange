import React, { useState } from "react";
import { users } from "../assests/data";

const Users = () => {
  const [filter, setFilter] = useState("All Ratings");

  const filteredUsers = users.filter((user) => {
    if (filter === "All Ratings") return true;
    if (filter === "4+") return user.rating >= 4;
    if (filter === "3+") return user.rating >= 3;
    return true;
  });

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold">Users</h1>
        <p className="text-gray-400 mb-6">
          Manage and filter users ({filteredUsers.length} users)
        </p>

        <div className="bg-gray-900 p-5 rounded-lg mb-8 w-1/2">
          <label className="block text-sm text-gray-400 mb-2">
            User Rating
          </label>
          <select
            className="bg-gray-800 p-2 rounded outline-none w-full"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All Ratings</option>
            <option>4+</option>
            <option>3+</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-gray-900 rounded-lg p-5 shadow hover:scale-[1.02] transition"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={user.image}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-yellow-400 text-sm">★ {user.rating}</p>
                </div>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <p>📧 {user.email}</p>
                <p>📱 {user.phone}</p>
                <p>📦 {user.orders} orders</p>
                <p>📅 Joined {user.joined}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
