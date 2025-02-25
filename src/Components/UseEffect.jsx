import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  const apiUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    apiUsers();
  }, []);

  useEffect(() => {
    console.log(users); // ✅ Now logs the updated users state correctly
  }, [users]);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffect;
