import { useState } from "react";
import InputBox from "./components/InputBox";
import Login from "./assets/unDraw/loginSVG.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState({ username: "", password: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setInput({ ...input, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleOnSubmit}>
        <img src={Login} className="login-img" alt="loginForm" />
        <InputBox
          type="text"
          name="username"
          value={input.username}
          onChange={handleOnChange}
          label="Username"
        />
        <InputBox
          type="password"
          name="password"
          value={input.password}
          onChange={handleOnChange}
          label="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
