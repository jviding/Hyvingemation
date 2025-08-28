"use client";

import { useState } from "react";
import UserForm from "./UserForm";

export default function AdminUsersPage() {

  const [showForm, setShowForm] = useState(false);
  const handleToggle = () => setShowForm(prev => !prev);

  const handleFormSubmitted = () => {
    setShowForm(false);
  };

  const handleFormCancelled = () => {
    setShowForm(false);
  };

  return (      
    <div className="w-full max-w-5xl space-y-8">
      
      {/* Header + Add Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Users</h1>
        <button 
          onClick={handleToggle}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow">
          + Add User
        </button>
      </div>

      {/* Form */}
      {showForm && 
        <UserForm 
          onSubmitted={handleFormSubmitted}
          onCancelled={handleFormCancelled} />
      }

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 text-gray-700 text-left text-sm uppercase tracking-wider">
            <tr>
              <th className="px-6 py-2">Name</th>
              <th className="px-6 py-2">Password</th>
              <th className="px-6 py-2">Role</th>
              <th className="px-6 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-700">
            {/* Example Row */}
            <tr>
              <td className="px-6 py-4">Player_1</td>
              <td className="px-6 py-4">Passwd123</td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4 flex justify-center space-x-2">
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                  Delete
                </button>
              </td>
            </tr>
            {/* Add more rows dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
