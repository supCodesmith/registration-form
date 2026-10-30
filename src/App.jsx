import { useState } from "react";
import InputField from "./components/InputField";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function validateName(name) {
    const trimmedName = name.trim();

    if (trimmedName === "") {
      return "Name is required";
    }

    if (trimmedName.length < 3) {
      return "Name must contain at least 3 characters";
    }

    if (/\d/.test(trimmedName)) {
      return "Name cannot contain numbers";
    }

    return "";
  }

  function validateEmail(email) {
    const trimmedEmail = email.trim();

    if (trimmedEmail === "") {
      return "Email is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      return "Enter a valid email address";
    }

    return "";
  }

  function validatePassword(password) {
    if (password === "") {
      return "Password is required";
    }

    if (password.length < 8) {
      return "Password must contain at least 8 characters";
    }

    return "";
  }

  function handleReset() {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setErrors({
      name: "",
      email: "",
      password: "", 
    });
  }

  return (
    <div className="form-container">
      <h1>Create Account</h1>
      <p>Fill in your details to register.</p>

      <form>
        <InputField
          label="Name"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          onBlur={() => {
            setErrors((prev) => ({
              ...prev,
              name: validateName(formData.name),
            }));
          }}
        />

        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          onBlur={() => {
            setErrors((prev) => ({
              ...prev,
              email: validateEmail(formData.email),
            }));
          }}
        />

        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          onBlur={() => {
            setErrors((prev) => ({
              ...prev,
              password: validatePassword(formData.password),
            }));
          }}
        />

        <InputField
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
