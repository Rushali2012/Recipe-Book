import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [userType, setUserType] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = localStorage.getItem("data");
    if (storedData) {
      const data = JSON.parse(storedData);
      if (data.username === username && data.password === password) {
        setUserType(data.userType); 
        localStorage.setItem("userType", data.userType); 
        setAlertMessage("Signin Successful!");
        setAlertType("success");

        setTimeout(() => {
          navigate("/home"); 
        }, 2000);
      } else {
        setAlertMessage("Invalid username or password.");
        setAlertType("error");
      }
    } else {
      setAlertMessage("No user found. Please register.");
      setAlertType("error");
    }
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>

      {alertMessage && (
        <div
          className={`alert-message ${alertType}`}
          style={{
            display: "block",
            backgroundColor: alertType === "success" ? "#d4edda" : "#f8d7da",
            color: alertType === "success" ? "#155724" : "#721c24",
            border: alertType === "success" ? "1px solid #c3e6cb" : "1px solid #f5c6cb",
            padding: "10px",
            marginBottom: "15px",
          }}
        >
          {alertMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <Link to="/"><button type="submit">Sign In</button></Link>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default SignIn;