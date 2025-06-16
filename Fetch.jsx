import React, { useEffect, useState } from "react";

function Fetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Users from MongoDB</h1>
      <ul>
        {users.map((u) => (
          <li key={u._id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;