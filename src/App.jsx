import { useState } from "react";
import InputField from "./components/InputField";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        />

        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
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
          <button type="reset" className="reset-button">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
