
function InputField({ label, type, name, placeholder }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
}

export default InputField;
