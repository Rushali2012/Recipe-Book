import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [userType, setUserType] = useState("guest"); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName && email && username && password) {
      const data = {
        firstName,
        lastName,
        email,
        username,
        password,
        userType, 
      };

      localStorage.setItem("data", JSON.stringify(data));
      localStorage.setItem("userType", userType); 

      setAlertMessage("Registration Successful! You can now Sign-In.");
      setAlertType("success");

      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } else {
      setAlertMessage("Please fill in all fields.");
      setAlertType("error");
    }
  };

  return (
    <>
    <div className="register-container">
      <h1>Register</h1>

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
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
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
        <label>
          User Type:
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="guest">Guest</option>
            <option value="host">Host</option>
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
    </>
  );
}

export default Register;