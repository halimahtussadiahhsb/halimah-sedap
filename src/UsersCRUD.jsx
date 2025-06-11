import { useState, useEffect } from "react";

const UsersCRUD = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAdd = () => {
    if (name && email && username) {
      if (editIndex != null) {
        const updatedUsers = [...users];
        updatedUsers[editIndex] = {name, email, username};
        setUsers(updatedUsers);
        setEditIndex(null);
      } else {
        setUsers([...users, { name,email, username}]);
      }
      setName("");
      setEmail("");
      setUsername("");
    }
  };

  const handleEdit = (index) => {
    setName(users[index].name);
    setEmail(users[index].email);
    setUsername(users[index].username);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">Manajemen Pengguna</h1>
      <div className="p-4 mb-4 border rounded shadow">
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-2 w-full p-2 border rounded"
        />
        <button
          onClick={handleAdd}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          {editIndex != null ? "Update Pengguna" : "Tambah Pengguna"}
        </button>
      </div>
      <div>
  {users.map((user, index) => (
    <div
      key={index}
      style={{padding: "10px",border: "1px solid #ccc",marginBottom: "8px",borderRadius: "5px",}}
    >
      <p style={{ fontWeight: "bold" }}>
        {user.name.firstname} {user.name.lastname}
      </p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <div style={{ marginTop: "8px" }}>
        <button
          onClick={() => handleEdit(index)}
          style={{
            marginRight: "5px",
            backgroundColor: "orange",
            color: "white",
            padding: "5px",
            border: "none",
          }}
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(index)}
          style={{backgroundColor: "red",color: "white",padding: "5px",border: "none",}}
        >
          Hapus
        </button>
      </div>
    </div>
  ))}
</div>
    </>
  );
};

export default UsersCRUD;
