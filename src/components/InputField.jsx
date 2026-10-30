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
}) {
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

      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

export default InputField;
