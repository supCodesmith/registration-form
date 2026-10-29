
import InputField from "./components/InputField";

function App() {
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
        />

        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />

        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />

        <InputField
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
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

