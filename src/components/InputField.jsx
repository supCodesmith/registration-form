function InputField({ label, type, id, name, placeholder }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} />
    </div>
  );
}

export default InputField;
