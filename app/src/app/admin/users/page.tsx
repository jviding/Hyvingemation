"use client";

import { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

export default function AdminUsersPage() {
  const [showForm, setShowForm] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);
  
  return (      
    <div className="w-full max-w-5xl space-y-8">
      
      {/* Header + Add Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Users</h1>
        <button 
          onClick={() => setShowForm(prev => !prev)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow"
        >
          + Add User
        </button>
      </div>

      {/* Form */}
      {showForm && 
        <UserForm 
          onSubmitted={() => { setShowForm(false); setShouldReload(prev => !prev); }}
          onCancelled={() => setShowForm(false)} />
      }

      {/* Table */}
      <UserTable reloadFlag={shouldReload} />
    </div>
  );
}
