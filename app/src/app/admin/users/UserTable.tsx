import { useState, useEffect, FormEvent } from "react";
import UserTableRow from "./UserTableRow";

type User = {
  id: number;
  name: string;
  password: string;
  isAdmin: boolean;
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
              <UserTableRow 
                key={user.id} 
                user={{ ...user }}
                onDelete={loadUsers} />
          ))}

        </tbody>
      </table>
    </div>
  );     
}
