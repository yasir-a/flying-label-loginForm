import "./InputBox.css";
const InputBox = (props) => {
  const { onChange, value, name, type, label } = props;
  return (
    <div className="input-group">
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        required
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{label}</label>
    </div>
  );
};

export default InputBox;
