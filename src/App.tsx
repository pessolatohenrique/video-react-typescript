import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function searchUsers() {
      const response = await axios.get<IUser[]>("http://localhost:3000/users");
      setUsers(response.data);
    }

    searchUsers();
  }, []);
  return (
    <div className="App">
      {[...users].map((item) => (
        <p key={item.email}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;
