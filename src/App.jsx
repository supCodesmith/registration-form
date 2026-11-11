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
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load previously registered users from localStorage.
  const [users, setUsers] = useState(() => {
    try {
      const savedUsers = localStorage.getItem("registeredUsers");
      return savedUsers ? JSON.parse(savedUsers) : [];
    } catch {
      return [];
    }
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setIsSubmitted(false);
  }

  function validateName(name) {
    const trimmedName = name.trim();

    if (!trimmedName) {
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

    if (!trimmedEmail) {
      return "Email is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      return "Enter a valid email address";
    }

    return "";
  }

  function validatePassword(password) {
    if (!password) {
      return "Password is required";
    }

    if (password.length < 8) {
      return "Password must contain at least 8 characters";
    }

    return "";
  }

  function validateConfirmPassword(confirmPassword) {
    if (!confirmPassword) {
      return "Please confirm your password";
    }

    if (confirmPassword !== formData.password) {
      return "Passwords do not match";
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
      confirmPassword: "",
    });

    setShowPassword(false);
    setShowConfirmPassword(false);
    setIsSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitted) {
      return;
    }

    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      confirmPassword: validateConfirmPassword(formData.confirmPassword),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      return;
    }

    // Create a user object without storing the password.
    const user = {
      id: crypto.randomUUID(),
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      registeredAt: new Date().toISOString(),
    };

    // Add the new user to the existing list.
    const updatedUsers = [...users, user];

    // Save the updated list in localStorage.
    try {
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

      setUsers(updatedUsers);
      console.log("Registered user:", user);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Unable to save user:", error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Unable to save registration. Please try again.",
      }));
    }
  }

  return (
    <div className="form-container">
      <h1>Create Account</h1>
      <p>Fill in your details to register.</p>

      <form onSubmit={handleSubmit} noValidate>
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
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword((prev) => !prev)}
        />

        <InputField
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          onBlur={() => {
            setErrors((prev) => ({
              ...prev,
              confirmPassword: validateConfirmPassword(
                formData.confirmPassword,
              ),
            }));
          }}
          showPassword={showConfirmPassword}
          onTogglePassword={() => setShowConfirmPassword((prev) => !prev)}
        />

        <div className="button-group">
          <button type="submit" disabled={isSubmitted}>
            {isSubmitted ? "Submitted" : "Submit"}
          </button>

          <button type="button" className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {isSubmitted && (
        <p className="success-message">Registration successful!</p>
      )}
    </div>
  );
}

export default App;
