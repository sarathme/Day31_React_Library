function InputGroup({ children, error, errorMessage, labelFor, label }) {
  return (
    <div className="input-group">
      <label htmlFor={labelFor}>
        {label}
        {error && <span>{errorMessage} </span>}
      </label>
      {children}
    </div>
  );
}

export default InputGroup;
