import React, { useState, useEffect } from "react";
import { auth } from "../Fire";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const enter = async () => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    let unsub = auth.onAuthStateChanged((user) => setUser(user));
    return () => {
      unsub(); // clean up
    };
  }, []);

  return (
    <>
      {user === null ? (
        <div>
          <h1>Sign IN</h1>
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

          <button onClick={enter}>Signin</button>
        </div>
      ) : (
        <div>
          <nav className="nav">
            <ul className="navlist">
              <li>Password Manager</li>

              <li>Parasnal</li>

              <li>Work</li>

              <li>Other</li>
              <li>Hello {user.email}</li>
              <li>
                <button onClick={() => auth.signOut()}>Signout</button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Signin;
