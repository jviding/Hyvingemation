import { useState, FormEvent } from "react";
import { Button, TextField, SelectField } from "@/components/Form";
import Dialog from "@/components/Dialog"

type User = {
  id: number;
  name: string;
  password: string;
  isAdmin: boolean;
};

type UserTableRowProps = {
  user: User;
  onDelete: () => void;
};

export default function UserTableRow({ user, onDelete }: UserTableRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [password, setPassword] = useState<string>(user.password);
  const [isAdmin, setIsAdmin] = useState<boolean>(user.isAdmin);

  const handleSave = async () => {
    try {
      const res = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: user.id, password, isAdmin })
      })
      if (!res.ok) throw new Error(`Error creating user: ${res.status} ${res.statusText}`);
      setIsEditing(false);
    } catch(err) {
      console.error('Error:', err);
    }
  };

  const handleCancel = (e: FormEvent) => { 
    setIsEditing(false);
    setPassword(user.password);
    setIsAdmin(user.isAdmin);
  };

  const handleDelete = async () => { 
    try {
      const res = await fetch('/api/admin/users', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: user.id })
      })
      if (!res.ok) throw new Error(`Error creating user: ${res.status} ${res.statusText}`);
      setIsDeleting(false);
      onDelete();
    } catch(err) {
      console.error('Error:', err);
    }
  };

  return (
    <tr key={user.id}>
      <td className="px-6 py-4">
        {user.name}
      </td>
      <td className="px-6 py-4">
        {!!isEditing ?
          <TextField 
            name="password" 
            value={password}
            required 
            onChange={(_, value) => setPassword(value)}
          />
          :
          password
        }
      </td>
      <td className="px-6 py-4">
        {!!isEditing ?
          <SelectField 
            name="role"
            value={isAdmin ? "admin" : "user"}
            options={[{ label: "User", value: "user" }, { label: "Admin", value: "admin" }]}
            required 
            onChange={(_, value) => setIsAdmin(value === "admin" )}
          />
          :
          (isAdmin ? 'Admin' : 'User')
        }
      </td>
      <td className="px-6 py-4 flex justify-center space-x-2">
        {!!isEditing &&
          <Button label="Save" onClick={handleSave} color="blue" size="px-3 py-1" />}
        {!!isEditing &&
          <Button label="Cancel" onClick={handleCancel} size="px-3 py-1" />}
        
        {!isEditing &&
          <Button label="Edit" onClick={() => setIsEditing(true)} size="px-3 py-1" />}
        {!isEditing &&
          <Button label="Delete" onClick={() => setIsDeleting(true)} size="px-3 py-1" />}

        {!!isDeleting && 
          <Dialog 
            title="Are you sure?"
            text={`Delete user: ${user.name}`}
            type="delete"
            onSubmit={handleDelete}
            onCancel={() => setIsDeleting(false)}
          />}
      </td>
    </tr>
  );     
}
