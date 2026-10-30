import { Eye, EyeOff } from "lucide-react";

function InputField({
  label,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  showPassword,
  onTogglePassword,
}) {
  const isPasswordField = type === "password";
  const inputType = isPasswordField && showPassword ? "text" : type;

  return (
    <div className="input-group">
      <div className="input-label-row">
        <label htmlFor={id}>{label}</label>

        {error && (
          <p className="error-message">
            <span className="error-star">*</span> {error}
          </p>
        )}
      </div>

      <div className="input-wrapper">
        <input
          type={inputType}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />

        {isPasswordField && (
          <button
            type="button"
            className="password-toggle"
            onClick={onTogglePassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;
