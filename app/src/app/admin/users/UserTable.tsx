import { useState, useEffect, FormEvent } from "react";

type User = {
  id: number;
  name: string;
  password: string;
  role: string;
};

type UserTableProps = {
  reloadFlag: boolean;
};

export default function UserTable({ reloadFlag }: UserTableProps) {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    const res = await fetch('/api/admin/users');
    if (!res.ok) throw new Error(`Error fetching users: ${res.status} ${res.statusText}`);
    setUsers(await res.json());
  };

  const handleEdit = (e: FormEvent) => { 
    e.preventDefault();
    /* Write edit logic here */
  };

  const handleDelete = (e: FormEvent) => { 
    e.preventDefault();
    /* Write delete logic here */
  };

  useEffect(() => { loadUsers() }, [reloadFlag]);

  return (
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
        
          {users.map(user => (
            <tr key={user.id}>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.password}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4 flex justify-center space-x-2">
                <button 
                  onClick={handleEdit}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                >
                  Edit
                </button>
                <button 
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );     
}
