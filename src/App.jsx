
function App() {
  return (
    <div className="form-container">
      <h1>Create Account</h1>
      <p>Fill in your details to register.</p>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>

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
