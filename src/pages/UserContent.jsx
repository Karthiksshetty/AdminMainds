import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Dummy user data
const users = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
    status: "new",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    email: "jane.smith@example.com",
    address: "456 Elm St, Springfield, IL",
    status: "existing",
  },
  // Add more users as needed
];

// User Section Component
const UserContent = () => {
  const [activeSection, setActiveSection] = useState(""); // Manage active section state
  const [selectedUser, setSelectedUser] = useState(null); // Manage selected user state

  // Handler for section click
  const handleSectionClick = (section) => {
    setActiveSection(section);
    setSelectedUser(null); // Reset selected user when section changes
  };

  // Handler for user click
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  // Handler for accepting a user
  const handleAcceptUser = (user) => {
    // Implement your logic for accepting the user here
    console.log(`Accepted user: ${user.name}`);
    toast.success(`Successfully accepted ${user.name}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Handler for denying a user
  const handleDenyUser = (user) => {
    // Implement your logic for denying the user here
    console.log(`Denied user: ${user.name}`);
    toast.error(`Successfully denied ${user.name}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const renderUsers = (status) => {
    return users
      .filter((user) => (status === "all" ? true : user.status === "new"))
      .map((user) => (
        <div
          key={user.id}
          className="p-4 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md mb-2 cursor-pointer"
          onClick={() => handleUserClick(user)}
        >
          <h4>{user.name}</h4>
        </div>
      ));
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">User Management</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div
          className="p-4 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md cursor-pointer"
          onClick={() => handleSectionClick("newUser")}
        >
          <h4 className="font-semibold">New User</h4>
        </div>
        <div
          className="p-4 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md cursor-pointer"
          onClick={() => handleSectionClick("allUsers")}
        >
          <h4 className="font-semibold">All Users</h4>
        </div>
      </div>

      {activeSection === "newUser" && (
        <div>
          <h4 className="text-lg font-semibold mb-4">New Users</h4>
          {renderUsers("new")}
        </div>
      )}

      {activeSection === "allUsers" && (
        <div>
          <h4 className="text-lg font-semibold mb-4">All Users</h4>
          {renderUsers("all")}
        </div>
      )}

      {selectedUser && (
        <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-2">{selectedUser.name}</h4>
          <p>Age: {selectedUser.age}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Address: {selectedUser.address}</p>
          <p>Status: {selectedUser.status}</p>
          <div className="flex mt-4">
            <button
              onClick={() => handleAcceptUser(selectedUser)}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mr-4"
            >
              Accept
            </button>
            <button
              onClick={() => handleDenyUser(selectedUser)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            >
              Deny
            </button>
          </div>
        </div>
      )}

      {/* Toast Container for Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default UserContent;
