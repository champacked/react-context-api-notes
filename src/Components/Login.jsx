import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // this is done because by default when u submit it ,
    // the value go else where and we don't want that
    setUser({ username, password });
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="enter username "
      />
      <input
        type="text"    
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter password "
      
      />
      <button onClick={handleSubmit}>Submit here</button>
    </>
  );
};

export default Login;
