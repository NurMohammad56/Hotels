import React, { useState } from "react";
import { useUpdateUserMutation } from "../../../redux/features/auth/authApi";

const UpdateUserModal = ({ user, onClose, onRoleUpdate }) => {
  const [role, setrole] = useState(user?.role);
  const [updateUser] = useUpdateUserMutation();

  const handleUpdateUser = async () => {
    try {
      await updateUser({ userId: user?._id, role }).unwrap();
      alert("Role updated successfully");
      onRoleUpdate();
      onClose();
    } catch (error) {
      console.error("Failed to update user", error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Edit User</h2>
        <div className="mb-4 space-y-4">
          <label className="block text-sm font-medium to-gray-700">Email</label>
          <input
            type="text"
            value={user?.email}
            readOnly
            className="mt-1 w-full bg-gray-200 block shadow-sm sm:text-sm border-gray-300 rounded-md py-1.5 px-5 focus:outline-none"
          />
        </div>
        <div className="mb-4 space-y-4">
          <label className="block text-sm font-medium to-gray-700">Role</label>
          <select
            value={role}
            onChange={(e) => setrole(e.target.value)}
            className="mt-1 w-full bg-gray-200 block shadow-sm sm:text-sm border-gray-300 rounded-md py-1.5 px-5 focus:outline-none"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="flex justify-end pt-3">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 rounded py-1 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdateUser}
            className="bg-indigo-500 text-white px-4 rounded py-2 mr-2 "
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserModal;
