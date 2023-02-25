import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Fábio", "Joana", "João"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Fábio", age: 20 },
    { id: 2, name: "Pedro", age: 30 },
    { id: 3, name: "João", age: 40 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  );
};

export default ListRender;
