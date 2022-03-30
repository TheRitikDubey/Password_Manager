import React, { useState } from "react";
import { auth } from "../Fire";
function Fireauth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const create = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <h1>Fireauth</h1>
        <h2>Email</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <h2>Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={create}>SignUp</button>
    </div>
  );
}

export default Fireauth;
